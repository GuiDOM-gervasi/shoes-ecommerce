import CartProduct from "#root/db/models/cartproduct";
import Cart from "#root/db/models/carts";

const setCartPayed = async (paymentId: any) => {
  try {
    let cart = await Cart.findOne({
      where: {
        paymentId: paymentId,
      },
    });

    let numberUpdates = await CartProduct.update(
      { state: "payed"},
      { where: 
          { cartId: cart.id,
            state: 'reserved'
          } }
    );

    return numberUpdates;

  } catch (e) {
    console.error(e);
    return 0;
  }
};

export default setCartPayed;
