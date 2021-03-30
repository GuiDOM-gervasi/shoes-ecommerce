import CartProduct from "#root/db/models/cartproduct";
import FinalProduct from "#root/db/models/finalproduct";
import Cart from "#root/db/models/carts";

const discountStock = async (paymentId: any) => {
  try {
    let cart = await Cart.findOne({
      where: {
        paymentId: paymentId,
      },
      include:[{model: CartProduct as any , include: FinalProduct as any}],
    });

    let newStock = 0;
    let id = "";
    let status = {
      status: "OK",
      ids: [],
      stock: [],
    };

    for (let i = 0; i < cart.cartproducts.length; i++) {
      console.log(`cart.cartproducts`, cart.cartproducts)
      newStock = cart.cartproducts[i].finalproducts.stock - cart.cartproducts[i].quantity;
      id = cart.cartproducts[i].finalproducts.id;
      status.ids.push(id);
      newStock < 1 ? status.stock.push(false) : status.stock.push(true);
      await FinalProduct.update({ stock: newStock }, { where: { id: id } });
    }

    return status;
  } catch (e) {
    console.error(e);
    return { status: "ERROR" };
  }
};

export default discountStock;
