import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery, useMutation } from "@apollo/client";
import { StyledOrderTable } from "./StyledOrderTable";
import { GET_ORDERS } from "../../graphql/queries";
import { UPDATE_STATE } from "../../graphql/mutations";
import Loader from "../../components/Loader";

const OrderTable = () => {
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
    const response = prompt("Are you sure? (y/n)");
    if (response === "y") {
      return updateState({ variables: { orderId, state } });
    }
    e.target.value = currentState;
  };

  const orders = data.viewOrders;

  let states = ["reserved", "payed", "finish", "rejected"];
  const currentIndex = states.findIndex((state) => state === currentState);
  let possibleStates = states.slice(currentIndex - states.length);

  return (
    <StyledOrderTable>
      <div className="sectionBar">
        {states.map((state) =>
          state === currentState ? null : (
            <section onClick={handleClick} id={state}>
              {state}
            </section>
          )
        )}
      </div>
      <ul>
        <li className="titles">
          <span className="product"> product </span>
          <span className="model"> model </span>
          <span className="quantity"> quantity </span>
          <span className="price"> price </span>
          <span className="state"> state </span>
          <span className="username"> username </span>
        </li>
        {orders?.map((order) => (
          <li>
            <span
              className="product"
              onClick={() =>
                history.push("/product/" + order.finalproducts.product.id)
              }
            >
              {" "}
              {order.finalproducts.product.name}{" "}
            </span>
            <span className="model">
              {" "}
              {order.finalproducts.model.size +
                " - " +
                order.finalproducts.model.color}{" "}
            </span>
            <span className="quantity">{order.quantity}</span>
            <span className="price"> {order.price} </span>
            <select
              className="state"
              value={order.state}
              onChange={(e) => handleChange(e, order.id)}
              disabled={order.state === "finish" || order.state === "rejected"}
            >
              {possibleStates.map((state, i) => (
                <option value={state} id={i.toString()}>
                  {state}
                </option>
              ))}
            </select>
            <span className="username"> {order.cart.user.userName} </span>
          </li>
        ))}
      </ul>
    </StyledOrderTable>
  );
};

export default OrderTable;
