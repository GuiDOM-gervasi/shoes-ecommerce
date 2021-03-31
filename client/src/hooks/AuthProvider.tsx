import React, { useState, useMemo, useEffect } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { LOGIN_USER, LOGOUT_USER, ADD_TO_CART } from "../graphql/mutations";
import { LocalPersistence, METHODS } from "../helpers/localPersistence";
import { GET_CART_SIMPLE} from "../graphql/queries";

const AuthContext = React.createContext(null);

export function AuthProvider(props) {
  const existeLocal = JSON.parse(localStorage.getItem("cart"))

  if(!existeLocal){
    localStorage.setItem("cart", JSON.stringify({ guess: true, items: []}));
  }

  const [user, setUser] = useState(false);
  const [userId, setUserId] = useState("0");
  const [isAdmin, setIsAdmin] = useState(false);

  
  /********************** Logica para cart sync *******************************/

  const [addToCart] = useMutation(ADD_TO_CART,{
    onCompleted: (data) => {
      if(data){
        console.log("Se cargo el item")
      }
    },
    onError: () => {

    }
  })

  const [getCart] = useLazyQuery(GET_CART_SIMPLE,{
    onCompleted: (data) => {
      const cartLocal = JSON.parse(localStorage.getItem("cart"))
      if(cartLocal.items.length > 0){
        return Promise.all([...cartLocal.items.map((item) => addToCart({
          variables: {
            finalproductId: item.id,
            cartId: data.cartSimple.id,
            price: parseFloat(item.product.price),
            quantity: parseInt(item.quantity),
          },
        }))]).then(()=> {
          console.log("Sync with cart");
        }).catch((err)=>{
          console.log(err)
        })
      }else{
        console.log("No habia nada en el carrito")
      }
      
      },
      onError: (err) => {
        console.log(err)
      }
      })

  /********************** Logica para cart sync *******************************/

  const [getLogin] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      if (data) {
        LocalPersistence("access-token", METHODS.write, data.loginUser.accessToken);
        LocalPersistence("refresh-token", METHODS.write, data.loginUser.refreshToken);
        LocalPersistence("user", METHODS.write, data.loginUser);
        setUser(data.loginUser);
        setUserId(data.loginUser.id);
        data.loginUser.isAdmin && setIsAdmin(data.loginUser.isAdmin);
        getCart({variables: {
          userId: data.loginUser.id,
          status: "reserved"
        }
        });
      }
    },
    onError:(error) => {
      console.log(error)
    }
  });
  
  const [logoutUser] = useMutation(LOGOUT_USER, {
    onCompleted: (data) => {
      if (data) {
        LocalPersistence("access-token", METHODS.remove);
        LocalPersistence("refresh-token", METHODS.remove);
        LocalPersistence("user", METHODS.remove);
        setUser(false);
        setUserId("0");
        setIsAdmin(false);
      }
    },
    onError:(error)=>{
        console.log(error)
    }
  });

  useEffect(() => {

    LocalPersistence("user",METHODS.get).then(
      (completeUser) => {
        completeUser && completeUser.isAdmin
        ? setIsAdmin(completeUser.isAdmin)
        : setIsAdmin(false);
      completeUser && completeUser.id
        ? setUserId(completeUser.id)
        : setUserId("0");
      }
    )

  }, []);

  function login(email: string, password: string, cb) {

    getLogin({
      variables: {
        email,
        password,
      },
    }).then(()=>{
      cb();
    })

  }

  function logout(cb) {

    logoutUser({
      variables:{
        id: userId
      }
    })
    .then(()=>{
      cb();
      })
  }

  const value = useMemo(() => {
    return {
      user,
      userId,
      isAdmin,
      logout,
      login,
    };
  }, [user, userId, isAdmin]);

  return <AuthContext.Provider value={value} {...props} />;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("Not have use in this component");
  }
  return context;
}
