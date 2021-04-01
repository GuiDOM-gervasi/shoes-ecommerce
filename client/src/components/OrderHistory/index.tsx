import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { StyledOrderHistory } from "./StyledOrderHistory";
import { GET_HISTORY } from "../../graphql/queries";
import Loader from "../Loader";
import { useAuth } from "../../hooks/AuthProvider";

export default function OrderHistory() {
  const { userId } = useAuth();
  const { data, loading, error } = useQuery(GET_HISTORY, {
    variables: { userId },
  });
  if (loading) return <Loader />;
  if (error) return <span> Error! {error.message} </span>;
  const orders = data?.cart?.cartproducts;

  return (
    <StyledOrderHistory>
      <ul className="container">
        {!data.cart || !orders.length ? (
          <li className="noItems">
            There's no items here, <Link to="/">click here to buy some!</Link>
          </li>
        ) : (
          orders.map((order) => {
            const {
              finalproducts: { product, model },
            } = order;
            return (
              <li key={order.id}>
                <img
                  src={product.muestraimg}
                  alt={`photoDetail - ${product.name}`}
                />
                <h4>{product.name}</h4>
                <p>
                  <span>
                    size: <strong>{" " + model.size}</strong>
                  </span>
                  <span>
                    color: <strong>{" " + model.color}</strong>
                  </span>
                  <span>
                    quantity: <strong>{" " + order.quantity}</strong>
                  </span>
                  <span>
                    price: <strong>{" " + order.price}</strong>
                  </span>
                </p>
                <Link
                  to={`/addReview/${product.id}/${userId}`}
                  className="boton"
                >
                  Leave a review!
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </StyledOrderHistory>
  );
}
