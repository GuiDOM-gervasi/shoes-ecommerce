import CartProduct from "#root/db/models/cartproduct";
import Cart from "#root/db/models/carts";
import Product from "#root/db/models/products";

const cartproductResolver = (parent, {cartId}) => {

  return CartProduct.findAll({
      where:{
        cartId
      }
  });

}

export default cartproductResolver;