import CartProduct from "#root/db/models/cartproduct";
import FinalProduct from "#root/db/models/finalproduct";
import Cart from "#root/db/models/carts";

const discountStock = async (paymentId: any) => {
  try {
    let cart = await Cart.findOne({
      where: {
        paymentId: paymentId,
      },
      include: [CartProduct as any, FinalProduct as any],
    });
  
  console.log('cart')
  console.log(cart)
  console.log('cartProduct')
  console.log(cart.carproducts)
  console.log(cart.carproducts.quantity)
  console.log('finaProduct')
  console.log(cart.finalproduct)
  console.log('finaProduct id')
  console.log(cart.finalproduct.id)
  console.log(cart.finalproduct.stock)

  } catch (e) {
    console.error(e);
    return 0;
  }
};

export default discountStock;