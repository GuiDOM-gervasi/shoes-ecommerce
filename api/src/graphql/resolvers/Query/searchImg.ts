
import  ProductModel  from './../../../db/models/productmodel';
import Brand from "#root/db/models/brands";
import Category from "#root/db/models/category";
import Product from "../../../db/models/products";
import Models from "../../../db/models/models";



const searchImg = async(parent, args, context, info)=>{
    // const Pm=ProductModel()
  const search = await Product.findAll({
      
  	where:{
	  name:args.name
	},
	include:[Models as any]
 })
  //  await ProductModel.$get("img")
  console.log(search)
  return search
}

export default searchImg 

// await product.$add("model", ModelsId);