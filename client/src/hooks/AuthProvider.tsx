import React, { useState, useMemo } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";
import { LOGOUT_USER } from "../graphql/queries";

const AuthContext = React.createContext(null);

export function AuthProvider(props) {

  const [user, setUser] = useState(null)

  const [getLogin] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      if (data) {
        localStorage.setItem("access-token", `${data.loginUser.accessToken}`);
        localStorage.setItem("refresh-token", `${data.loginUser.refreshToken}`);
        setUser(data.loginUser)
      }
    },
  });

  const [logoutUser] = useLazyQuery(LOGOUT_USER,{
    onCompleted: (data) =>{
      if(data){
        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
        setUser(null)
      }
    }
  });

  function login(email: string, password: string){
    console.log("Login")
    getLogin({
      variables: {
        email,
        password,
      },
    });  
  }

  function logout(){
    console.log("Logout")
    logoutUser()
  }

  const value = useMemo(() => {
    return(
      {
        user,
        logout,
        login
      }
    )
  },[user])


  return <AuthContext.Provider value={value} {...props}/>

}

export function useAuth(){
  const context = React.useContext(AuthContext)
  if(!context){
    throw new Error("No papá, no seas boludo")
  }
  return context
}
