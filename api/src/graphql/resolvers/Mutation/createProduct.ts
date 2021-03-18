import Product from "../../../db/models/products";
import {ProductAttributes} from '../../../db/models/types';


const createProductResolver = async (
  context: any,
  { name, description, price, brandId, CategoriesId, ModelsId }: ProductAttributes
) => {
  const product = await Product.create({ name, description, price, brandId });

  await product.$add("category", CategoriesId);// 3er arg , throw:{}

  await product.$add("model", ModelsId);

  return product;
};

export default createProductResolver;
