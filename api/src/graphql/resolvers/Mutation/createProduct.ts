import {Product, ProductAttributes} from "../../../db/models";

const createProductResolver = async (context: any, {name, description, price}: ProductAttributes) =>{
  // console.log(firstName)
  // let aux = await Product.create({name, description, price});
  // console.log(aux)
  return await Product.create({name, description, price});
}

export default createProductResolver