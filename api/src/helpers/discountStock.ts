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

    let newStock = 0;
    let id = "";
    let status = {
      status: "OK",
      ids: [],
      stock: [],
    };

    for (let i = 0; i < cart.cartproducts.length; i++) {
      newStock = cart.finalproducts[i].stock - cart.cartproducts[i].quantity;
      id = cart.finalproducts[i].id;
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
