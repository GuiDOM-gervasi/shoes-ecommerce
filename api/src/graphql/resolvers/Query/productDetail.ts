import Product from "../../../db/models/products";

const productDetailResolver = async (parent, args, context, info) => {
  const productDetail = await Product.findByPk(args.id);
  console.log(productDetail)
  return productDetail
}

export default productDetailResolver;