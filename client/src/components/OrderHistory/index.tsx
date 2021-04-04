import React from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { StyledOrderHistory } from "./StyledOrderHistory";
import { GET_HISTORY } from "../../graphql/queries";
import Loader from "../Loader";
import { useAuth } from "../../hooks/AuthProvider";
import Swal from "sweetalert2";
import { ADD_REVIEW } from "../../graphql/mutations";

export default function OrderHistory() {
  const { userId } = useAuth();
  const { data, loading, error } = useQuery(GET_HISTORY, {
    variables: { userId },
  });
  const [createReview, { error: errorMutationReview }] = useMutation(
    ADD_REVIEW
  );
  const handleReview = (productId, userId) =>{
    Swal.mixin({
      confirmButtonText: "Next &rarr;",
      showCancelButton: true,
      progressSteps: ["1", "2", "3"],
    })
      .queue([
        {
          title: "Review title",
          input: "text",
          inputValidator: (value) => {
            if (!value) {
              return "You need to set a title for your review.";
            }
          },
        },
        {
          title: "Review description",
          input: "textarea",
          inputValidator: (value) => {
            if (!value) {
              return "You need to set a description for your review.";
            }
          },
        },
        { 
          title: "Review score",
          text: "1:Very poor 2:Poor 3:Fair 4:Good 5:Excellent",
          input: "range",
          inputAttributes: {
            min: "1",
            max: "5",
            step: "1",
          },
          inputValue: "3",
          inputValidator: (value) => {
            if (!value) {
              return "You need to set a score for your review.";
            }
          },
        }
      ])
      .then(async (result: any) => {
        if (result.value) {
          try {
            await createReview({
              variables: {
                title: result.value[0],
                description: result.value[1],
                score: parseInt(result.value[2]),
                userId,
                productId,
              },
            })
            Swal.fire({
              icon: "success",
              title: "Review added",
              text:
                "Review added successfully.",
            });
          } catch (err) {
            console.log(err);
            return;
          }
        }
      });  
  }
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
                <button className="boton" onClick={()=>handleReview(product.id, userId)}>
                  Leave a review!
                </button>
              </li>
            );
          })
        )}
      </ul>
    </StyledOrderHistory>
  );
}
