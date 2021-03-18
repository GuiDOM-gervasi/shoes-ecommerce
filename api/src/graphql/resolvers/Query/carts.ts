import Cart from "#root/db/models/carts";

const cartResolver = () => {

  return Cart.findAll();

}

export default cartResolver;