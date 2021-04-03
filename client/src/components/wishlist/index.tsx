import React, { useState } from "react";
import { useHistory } from "react-router";
import { useQuery, useMutation } from "@apollo/client";
import { StyledWishListTable } from "./StyledWishList";
import { GET_ORDERS } from "../../graphql/queries";
import { UPDATE_STATE } from "../../graphql/mutations";
import Loader from "../Loader";
import Swal from "sweetalert2";

const WishListTable = () => {
  // reserved, payed, finish, rejected
  const { data, loading, error, refetch } = useQuery(GET_ORDERS, {
    variables: { orderId: "all", state: "reserved" },
  });

  const [currentState, setCurrentState] = useState("reserved");

  const [
    updateState,
    { loading: loadingMutation, error: errorMutation },
  ] = useMutation(UPDATE_STATE, {
    refetchQueries: [
      { query: GET_ORDERS, variables: { orderId: "all", state: currentState } },
    ],
  });

  const history = useHistory();

  if (loading || loadingMutation) return <Loader />;
  if (error || errorMutation)
    return <span> Error! {error?.message || errorMutation?.message} </span>;

  const handleClick = (e) => {
    const state = e.target.id;
    setCurrentState(state);
    refetch({ orderId: "all", state });
  };

  const handleChange = (e, orderId) => {
    const state = e.target.value;
    e.target.value = currentState;
  };

  const orders = data.viewOrders;

  return (
    <StyledWishListTable>      
      <ul>
        <li className="titles">
          <span className="model">Imagen </span>
          <span className="product">Product name </span>
          <span className="quantity">Categoria </span>
          <span className="price">Marca </span>
          <span className="username">Remover </span>
        </li>
        {orders?.map((order) => (
          <li>
            <span
              className="product"
              onClick={() =>
                history.push("/product/" + order.finalproducts.product.id)
              }
            >
              <p className="product">Product</p>{" "}
              {order.finalproducts.product.name}{" "}
            </span>
            <span className="model">
              <p className="model">Model</p>{" "}
              {order.finalproducts.model.size +
                " - " +
                order.finalproducts.model.color}{" "}
            </span>
            <span className="quantity">
              <p className="quantity">Quantity</p>
              {order.quantity}
            </span>
            <span className="price">
              <p className="price">Price</p>
              {order.price}{" "}
            </span>
            <span className="username">
              <p className="username">Username</p>
              {order.cart.user.userName}{" "}
            </span>
          </li>
        ))}
      </ul>
    </StyledWishListTable>
  );
};

export default WishListTable;
