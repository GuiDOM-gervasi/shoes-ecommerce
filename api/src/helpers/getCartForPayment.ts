import CartProduct from "#root/db/models/cartproduct";
import Cart from "#root/db/models/carts";

const getCartForPayment = async (userId:number) => {
	let status= 'ok'

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
    if(cart?.cartproducts.length > 0){
      cart.cartproducts.forEach(element => {
        count = count + element.quantity;
        price = price + (element.quantity * element.price)
    
      });
    }else{
      console.error({message: `cart: ${cart?.id} has not product added`})
      status = 'not product found'
    }
    return {count, price, status}
  }
  catch(error){

    let count = 0;
    let price = 0;
    console.error(error)
    return {count, price, status: 'error'}
  
  }
};

export default getCartForPayment;