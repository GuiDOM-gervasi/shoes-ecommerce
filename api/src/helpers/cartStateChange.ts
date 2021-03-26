import CartProduct from "#root/db/models/cartproduct";
import Cart from "#root/db/models/carts";

const cartStateChange = async (userId:number) => {
  
	let cart =  await Cart.findOne({
		where: {
			userId
		},
		include: [
			{
				model: CartProduct as any
			},
		],
	});

  console.log(cart)
  cart.cartproducts.forEach(element => {
    console.log('element.state')
    console.log(element.state)
    element.state = 'payed'
    console.log('after change')
    console.log(element.state)
  });

  return {status: 'ok'}
};

export default cartStateChange;