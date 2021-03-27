import updatePaymentId from '#root/helpers/updatePaymentId';
import accessEnv from '#root/helpers/accessEnv';
const client = accessEnv("CLIENT_ADDRESS")

export default async function stripeCheckout(count:number, price:number, userId:any, stripe:any) {
  let payment =  {
    price_data: {
      currency: 'ars',
      product_data: {
        name: `Este carrito con ${count} productos esta a punto de ser tuyo!!!`,
      },
      unit_amount: price * 100,  // price should be always on cents. 
    },
    quantity: 1,
  }

  try{
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        payment
      ],
      mode: 'payment',
      success_url: `${client}/success`,
      cancel_url: `${client}/cancel`,
    });

    let isPaymentSaved = await updatePaymentId(userId, session.payment_intent)

    return session;

  }
  catch(e){
    throw e
  }
}