import React from 'react'
import ReactDOM from "react-dom";
import StripeCheckout from 'react-stripe-checkout';
import { toast } from "react-toastify";
toast.configure();

export default function Payment() {

  const [product] = React.useState({
    name: "Super Zapatillas",
    price: 5725,
    description: "Zapaz super compadas y livianas"
  });

  async function handleToken(token, addresses) {
    console.log({token, addresses})
    // const response = await axios.post(
    //   "https://ry7v05l6on.sse.codesandbox.io/checkout",
    //   { token, product }
    // );
    // const { status } = response.data;
    // console.log("Response:", response.data);
    // if (status === "success") {
    //   toast("Success! Check email for details", { type: "success" });
    // } else {
    //   toast("Something went wrong", { type: "error" });
    // }
  }
  return (
    <div>
      <div>
        <h1>{product.name}</h1>
        <h3>On Sale</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51IYWrFKvrKT0hMD3gSFxlJd8ljQvDJBYWVaI0Xtr1JxWYpliVfyIyQG4Um32fUMZS5JOj8JEyDchF5TcHmWlO4qk00TxDSLbDv"
        token={handleToken}
        amount={product.price * 100}
        name="Carrito de compras"
        // billingAddress
        // shippingAddress
      />
      {/* <StripeCheckout
        // stripeKey="pk_test_51IYWrFKvrKT0hMD3gSFxlJd8ljQvDJBYWVaI0Xtr1JxWYpliVfyIyQG4Um32fUMZS5JOj8JEyDchF5TcHmWlO4qk00TxDSLbDv"
        // token={handleToken}
        // amount={product.price * 100}
        // name="Tesla Roadster"
        // billingAddress
        // shippingAddress */}
    </div>
  )
}
