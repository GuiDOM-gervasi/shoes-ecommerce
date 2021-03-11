import {Product, ProductAttributes} from "../../../db/models";

const createProductResolver = async (context: any, {name, description, price, brandId}: ProductAttributes) =>{

  return await Product.create({name, description, price, brandId});
}

export default createProductResolver