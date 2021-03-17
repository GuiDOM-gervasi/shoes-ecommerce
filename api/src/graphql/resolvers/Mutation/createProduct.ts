import Product from "../../../db/models/products";
import {ProductAttributes} from '../../../db/models/types';

// export interface ProductImput {
//   id?: string;
//   name: string;
//   description: string;
//   price: number;
//   brandId:string;
//   CategoriesId: [string];

// }

const createProductResolver = async (
  context: any,
  { name, description, price, brandId, CategoriesId, ModelsId }: ProductAttributes
) => {
  const product = await Product.create({ name, description, price, brandId });

  await product.$add("category", CategoriesId);

  await product.$add("model", ModelsId);

  return product;
};

export default createProductResolver;
