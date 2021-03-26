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

  cart.cartproducts.forEach(element => {
    // count = count + element.quantity;
    // price = price + (element.quantity * element.price)
  });

  return {status: 'ok'}
};

export default cartStateChange;