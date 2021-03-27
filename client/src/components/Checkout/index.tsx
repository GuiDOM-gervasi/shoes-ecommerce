import React from 'react'
// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { StyledChaeckout } from './StyledCheckout';
import { useAuth } from '../../hooks/AuthProvider';
import { GET_CART } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

const stripePromise = loadStripe('pk_test_51IYWrFKvrKT0hMD3gSFxlJd8ljQvDJBYWVaI0Xtr1JxWYpliVfyIyQG4Um32fUMZS5JOj8JEyDchF5TcHmWlO4qk00TxDSLbDv');

export default function Checkout() {
  const { userId } = useAuth();
  const { data, loading, error } = useQuery(GET_CART, {
    variables: {
      userId: userId && userId,
    },
  });
  // const {userId} = useAuth()
 

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


  const hardcore = [{name:"Addidas",quantity:"1",price:"555"},
  {name:"Addidas",quantity:"1",price:"555"},
  {name:"Addidas",quantity:"2",price:"555"},
  {name:"Addidas",quantity:"3",price:"555"}]


  return (
    <StyledChaeckout>
      <h2>Datos de la compra</h2>
      <ul>
        {
          hardcore.map((i)=>(
      <li>
          
           {parseInt(i.quantity) > 1 ? <span className="name">{i.name} x {i.quantity}</span> : 
            <span className="name">{i.name}</span>}     
            <span className="price">{i.price}</span>
      </li>
          ))
        }
      </ul>
      <form className="location">
        <label>Dirección de envio</label>
        <input
          type="text"
          name="Ciudad"
          placeholder="Ciudad"
        />

        <input 
          type="text"
          name="Calle"
          placeholder="Calle"
        />
        <input className="boton" type="submit" value="Comprar" />
      </form>
      </StyledChaeckout>
  )
}
