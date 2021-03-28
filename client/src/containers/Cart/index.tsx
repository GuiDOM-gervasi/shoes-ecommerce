import React,{ useEffect } from "react";
import { GET_CART } from "../../graphql/queries";
import { StyledCart } from "./StyledCart";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { CartAttributes } from "../../types";
import { fotosZapa } from "../../components/ProductDetail/mockup";
import { useAuth } from "../../hooks/AuthProvider";
import { DELETE_TO_CART, QUANTITY } from "../../graphql/mutations";
import Loader from "../../components/Loader";
import { LocalPersistence } from "../../helpers/localPersistence";
import { Link } from "react-router-dom";


const Cart = () => {
  const { userId } = useAuth();
  const { data, loading, error } = useQuery(
    GET_CART, {
    variables: {
      userId: userId && userId,
    },
  });

  const [deleteProductCart, { loading: loadingDelete }] = useMutation(
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

  const [controlQuantity, { loading: loadingQuantity }] = useMutation(
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
  const cartProductsArray = data.cart?.cartproducts;
  const { photo } = fotosZapa;
  let count = 0;

  const handleDelete = (finalproduct) => {
    deleteProductCart({
      variables: {
        cartId: data.cart?.id,
        finalproductId: finalproduct,
      },
    });
  };

  const handleQuantity = (e, id) => {
    controlQuantity({
      variables: {
        id,
        quantity: parseInt(e.target.value),
      },
    });
  };

  const handleClick = (e, cartProductItem) => {
    const input: any = e.target.parentNode.querySelector("#quantity");
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
  };

  return (
    <StyledCart className="fondoDegradado">
      <div className="container ">
        {cartProductsArray?.map((cartProductItem) => {
          const product = cartProductItem.finalproducts.product
          count += product.price * cartProductItem.quantity;
          return (
            <div>
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
        })}
      </div>
      <footer>
        <h5>Total: ${count}</h5>
        <Link to="/checkout">
        <button className="boton">Buy</button>
        </Link>
      </footer>
    </StyledCart>
  );
};

export default Cart;
