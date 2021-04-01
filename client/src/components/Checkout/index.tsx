import React from "react";
// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { StyledChaeckout } from "./StyledCheckout";
import { useAuth } from "../../hooks/AuthProvider";
import { GET_CART } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import Loader from "../Loader";
import Swal from "sweetalert2";

const stripePromise = loadStripe(
  "pk_test_51IYWrFKvrKT0hMD3gSFxlJd8ljQvDJBYWVaI0Xtr1JxWYpliVfyIyQG4Um32fUMZS5JOj8JEyDchF5TcHmWlO4qk00TxDSLbDv"
);

export default function Checkout() {
  const { userId } = useAuth();
  const { data, loading, error } = useQuery(GET_CART, {
    variables: {
      userId: userId && userId,
    },
  });
  // const {userId} = useAuth()

  const handleSubmit = async (event) => {
    // Get Stripe.js instance
    event.preventDefault();
    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const response = await fetch("http://localhost:3001/checkout", {
      method: "POST",
      body: JSON.stringify({ userId }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const session = await response.json();

    let timerInterval;
    Swal.fire({
      title: "Thanks for visiting us!",
      html: "You'll be redirected to the payment site in <b></b>.",
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector("b") as any;
            if (b) {
              b.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        stripe.redirectToCheckout({
          sessionId: session.id,
        });
      }
    });



  };

  if (loading) return <Loader />;
  if (error) return <span>Error {error.message}</span>;
  const cartProductsArray = data.cart?.cartproducts;
  let count = 0;

  return (
    <StyledChaeckout>
      <h2>Datos de la compra</h2>
      <ul>
        {cartProductsArray.map((i: any) => {
          count += i.finalproducts.product.price * i.quantity;
          return (
            <li key={i.finalproducts.id}>
              {i.quantity > 1 ? (
                <span className="name">
                  {i.finalproducts.product.name} x {i.quantity}
                </span>
              ) : (
                <span className="name">{i.finalproducts.product.name}</span>
              )}
              <span className="model">
                {i.finalproducts.model.size} / {i.finalproducts.model.color}
              </span>
              <span className="price">
                ${i.finalproducts.product.price * i.quantity}
              </span>
            </li>
          );
        })}
        <li>
          <span className="name">
            <strong>Total:</strong>
          </span>
          <span className="price">
            <strong>${count}</strong>
          </span>
        </li>
      </ul>
      <form className="location" onSubmit={handleSubmit}>
        <label>Dirección de envio</label>
        <input type="text" name="Country" placeholder="Country" />
        <input type="text" name="City" placeholder="City" />

        <input type="text" name="Street" placeholder="Street" />
        <input type="text" name="adressNumber" placeholder="Adress Number" />
        <input type="text" name="postCode" placeholder="Post Code" />
        <input className="boton" type="submit" value="Comprar" />
      </form>
    </StyledChaeckout>
  );
}
