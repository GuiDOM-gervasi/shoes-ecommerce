import Product from "../../../db/models/products";
import Category from "../../../db/models/category";
import {ProductAttributes} from "../../../db/models/types"
 


const productoForCategory = async(parent, args, context, info)=>{
  console.log(args.name)
  const productsCategory = Category.findAll({
  	where:{
	  name:args.name
	},
	include: [Product as any]
  })
  console.log(productsCategory)
  
  return productsCategory
}

export default productoForCategory 

