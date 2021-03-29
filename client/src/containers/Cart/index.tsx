import React, {useState} from "react";
import { GET_CART } from "../../graphql/queries";
import { StyledCart } from "./StyledCart";
import { useMutation, useQuery } from "@apollo/client";
import { useAuth } from "../../hooks/AuthProvider";
import { DELETE_TO_CART, QUANTITY } from "../../graphql/mutations";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";


const Cart = () => {
  const cartLocal =  JSON.parse(localStorage.getItem("cart"));
  const [cartLocalState, setCartLocalState] = useState(cartLocal);

  const { userId } = useAuth();
  const { data, loading, error } = useQuery(
    GET_CART, {
    variables: {
      userId: userId && userId,
    },
  });

  const [deleteProductCart] = useMutation(
    DELETE_TO_CART,
    {
      refetchQueries: [
        {
          query: GET_CART,
          variables: {
            userId: userId && userId,
          },
        },
      ],
    }
  );

  const [controlQuantity] = useMutation(
    QUANTITY,
    {
      refetchQueries: [
        {
          query: GET_CART,
          variables: {
            userId: userId && userId,
          },
        },
      ],
    }
  );

  if (loading) return <Loader />;
  if (error) return <span>Error {error.message}</span>;
  const cartProductsArray = userId !== "0"  ? data.cart?.cartproducts : cartLocalState.items;
  let count = 0;
  const handleDelete = (finalproduct) => {
    if(userId !== "0"){
      deleteProductCart({
        variables: {
          cartId: data.cart?.id,
          finalproductId: finalproduct,
        },
      });
    }else{
      let recuperarCartLocal = JSON.parse(localStorage.getItem("cart"));
      let items = recuperarCartLocal.items.filter(item => item.id !== finalproduct);
      recuperarCartLocal.items = items;
      localStorage.setItem("cart", JSON.stringify(recuperarCartLocal));
      setCartLocalState(recuperarCartLocal);
    }
  };

  const handleQuantity = (e, id) => {
    if(userId !== "0"){
      controlQuantity({
        variables: {
          id,
          quantity: parseInt(e.target.value),
        },
      });
    }else{
      let recuperarCartLocal = JSON.parse(localStorage.getItem("cart"));
      let items = recuperarCartLocal.items.find(item => item.id === id);
      items.quantity = parseInt(e.target.value);
      localStorage.setItem("cart", JSON.stringify(recuperarCartLocal));
      setCartLocalState(recuperarCartLocal);
    }
  };

  const handleClick = (e, cartProductItem) => {
    const input: any = e.target.parentNode.querySelector("#quantity");

    if(userId !== "0"){

      if (e.target.id === "mas") {
        return handleQuantity(
          { target: { value: Number(input.value) + 1 } },
          cartProductItem.id
        );
      }
      if (input.value > 1) {
        return handleQuantity(
          { target: { value: Number(input.value) - 1 } },
          cartProductItem.id
        );
      }

    }else{
      
      if (e.target.id === "mas") {
        return handleQuantity(
          { target: { value: Number(input.value) + 1 } },
          cartProductItem
        );
      }
      if (input.value > 1) {
        console.log("Ingreso ------", cartProductItem)
        return handleQuantity(
          { target: { value: Number(input.value) - 1 } },
          cartProductItem
        );
      }

    }
  };

  return (
    <StyledCart className="fondoDegradado">
      <div className="container ">
        {
        userId !== "0" ? cartProductsArray?.map((cartProductItem) => {
          const product = cartProductItem.finalproducts.product
          count += product.price * cartProductItem.quantity;
          return (
            <div key={cartProductItem.finalproducts.id}>
              <img
                src={product.muestraimg}
                alt={`photoDetail 3 - ${product.name}`}
              />
              <h4>{product.name}</h4>
              <p>Price: ${product.price}</p>
              <button
                className="buttonDelete"
                onClick={() => {console.log(cartProductItem.finalproducts);handleDelete(cartProductItem.finalproducts.id.toString())}}
              >
                X
              </button>
              <div className="number-input">
                <button id="-" onClick={(e) => handleClick(e, cartProductItem)}></button>
                <input
                  id="quantity"
                  className="quantity"
                  type="number"
                  onChange={(e) => handleQuantity(e, cartProductItem.id)}
                  value={cartProductItem.quantity}
                />
                <button
                  id="mas"
                  onClick={(e) => handleClick(e, cartProductItem)}
                  className="plus"
                ></button>
              </div>
            </div>
          );
        }) : cartProductsArray?.map((cartProductItem) => {
          const product = cartProductItem.product
          count += product.price * cartProductItem.quantity;
          return (
            <div>
              <img
                src={product.muestraimg}
                alt={`photoDetail 3 - ${product.name}`}
              />
              <h4>{product.name}</h4>
              <p>Price: {product.price}</p>
              <button
                className="buttonDelete"
                onClick={() => {console.log(cartProductItem);handleDelete(cartProductItem.id.toString())}}
              >
                X
              </button>
              <div className="number-input">
                <button id="-" onClick={(e) => handleClick(e, cartProductItem.id)}></button>
                <input
                  id="quantity"
                  className="quantity"
                  type="number"
                  onChange={(e) => handleQuantity(e, cartProductItem.id)}
                  value={cartProductItem.quantity}
                />
                <button
                  id="mas"
                  onClick={(e) => handleClick(e, cartProductItem.id)}
                  className="plus"
                ></button>
              </div>
            </div>
          )
        })
      }
      </div>
      <footer>
        <h5>Total: ${count}</h5>
        <Link to={userId!== "0" ? "/checkout" : "/login"} >
        <button className="boton">Buy</button>
        </Link>
      </footer>
    </StyledCart>
  );
};

export default Cart;
