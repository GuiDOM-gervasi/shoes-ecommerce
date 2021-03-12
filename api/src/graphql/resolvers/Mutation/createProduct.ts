import {Product, ProductAttributes} from "../../../db/models";

// export interface ProductImput {
//   id?: string;
//   name: string;
//   description: string;
//   price: number;
//   brandId:string;
//   CategoriesId: [string];
  
// }

const createProductResolver = async (context: any, {name, description, price, brandId, CategoriesId}: ProductAttributes) =>{

  const product = await Product.create({name, description, price, brandId});
  await product.$add("category", CategoriesId[0])

  return product;
  
}

export default createProductResolver