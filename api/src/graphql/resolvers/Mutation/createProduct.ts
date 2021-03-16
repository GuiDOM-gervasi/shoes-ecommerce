import Product from "../../../db/models/products";
import {ProductAttributes} from '../../../db/models/types';


const createProductResolver = async (
  context: any,
  { name, description, price, brandId, CategoriesId, ModelsId }: ProductAttributes
) => {
  const product = await Product.create({ name, description, price, brandId });

  await product.$add("category", CategoriesId);

  await product.$add("model", ModelsId);
  console.log(product)

  return product;
};

export default createProductResolver;
