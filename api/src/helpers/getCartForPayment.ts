import CartProduct from "#root/db/models/cartproduct";
import Cart from "#root/db/models/carts";

const getCartForPayment = async (userId:number) => {
	
  try{
    let cart =  await Cart.findOne({
      where: {
        userId
      },
      include: [
        {
          model: CartProduct as any,
          as: 'cartproducts',
            where: {
              state: 'reserved'
            },
        },
      ],
    });
  
    let count = 0;
    let price = 0;
    // console.log(cart)
    cart.cartproducts.forEach(element => {
      count = count + element.quantity;
      price = price + (element.quantity * element.price)
  
    });
    console.log('price:', price)
    return {count, price, status: 'ok'}
  }
  catch(error){

    let count = 0;
    let price = 0;
    console.error(error)
    return {count, price, status: 'error'}
  
  }
};

export default getCartForPayment;