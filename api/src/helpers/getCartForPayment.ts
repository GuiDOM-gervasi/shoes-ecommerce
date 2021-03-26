import CartProduct from "#root/db/models/cartproduct";
import Cart from "#root/db/models/carts";

const getCartForPayment = async (userId:number) => {
	
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

  let count = 0;
  let price = 0;
  cart.cartproducts.forEach(element => {
    count = count + element.quantity;
    price = price + (element.quantity * element.price)
  });

  return {count, price}
};

export default getCartForPayment;