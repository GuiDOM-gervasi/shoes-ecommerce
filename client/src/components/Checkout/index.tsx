import React from 'react'
// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51IYWrFKvrKT0hMD3gSFxlJd8ljQvDJBYWVaI0Xtr1JxWYpliVfyIyQG4Um32fUMZS5JOj8JEyDchF5TcHmWlO4qk00TxDSLbDv');

export default function Checkout() {

  // const {userId} = useAuth()
  let userId =  3;

  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch("http://localhost:3001/checkout", { 
      method: 'POST', 
      body: JSON.stringify({userId : 3}), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <div>
      <button role="link" onClick={handleClick}>
        Checkout
      </button>
    </div>
  )
}
