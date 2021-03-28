import Brand from "#root/db/models/brands";
import CartProduct from "#root/db/models/cartproduct";
import Cart from "#root/db/models/carts";
import Category from "#root/db/models/category";
import FinalProduct from "#root/db/models/finalproduct";
import Models from "#root/db/models/models";
import Product from "#root/db/models/products";

const cartSimpleResolver = async (parent, { userId }) => {
	const result =  await Cart.findOne({
		where: {
			userId
		}
	});
	return {id: result.id.toString()}
};

export default cartSimpleResolver;