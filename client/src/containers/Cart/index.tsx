import React from "react";
import { GET_CART } from "../../graphql/queries";
import { StyledCart } from "./StyledCart";
import { useMutation, useQuery } from "@apollo/client";
import { CartAttributes } from "../../types";
import { fotosZapa } from "../../components/ProductDetail/mockup";
import { useAuth } from "../../hooks/AuthProvider";
import { DELETE_TO_CART, QUANTITY } from "../../graphql/mutations";
import Loader from "../../components/Loader";
import { LocalPersistence } from "../../helpers/localPersistence";

const Cart = () => {
  const { userId } = useAuth();
  const { data, loading, error } = useQuery(GET_CART, {
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
  const products = data.cart?.finalproducts;
  console.log(products);

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

  const handleClick = (e, p) => {
    const input: any = e.target.parentNode.querySelector("#quantity");
    if (e.target.id === "mas") {
      return handleQuantity(
        { target: { value: Number(input.value) + 1 } },
        p.cartproducts[0].id
      );
    }
    if (input.value > 1) {
      return handleQuantity(
        { target: { value: Number(input.value) - 1 } },
        p.cartproducts[0].id
      );
    }
  };

  return (
    <StyledCart className="fondoDegradado">
      <div className="container ">
        {products?.map((p) => {
          count += p.product.price * p.cartproducts[0].quantity;
          return (
            <div>
              <img
                src={p.product.muestraimg}
                alt={`photoDetail 3 - ${p.product.name}`}
              />
              <h4>{p.product.name}</h4>
              <p>Price: {p.product.price}</p>
              <button
                className="buttonDelete"
                onClick={() => handleDelete(p.id)}
              >
                X
              </button>
              <div className="number-input">
                <button id="-" onClick={(e) => handleClick(e, p)}></button>
                <input
                  id="quantity"
                  className="quantity"
                  type="number"
                  onChange={(e) => handleQuantity(e, p.cartproducts[0].id)}
                  value={p.cartproducts[0].quantity}
                />
                <button
                  id="mas"
                  onClick={(e) => handleClick(e, p)}
                  className="plus"
                ></button>
              </div>
            </div>
          );
        })}
      </div>
      <footer>
        <h5>Total: {count}</h5>
        <button className="boton">Buy</button>
      </footer>
    </StyledCart>
  );
};

export default Cart;
