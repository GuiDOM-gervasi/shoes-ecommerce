import Product from "../../../db/models/products";
import Category from "../../../db/models/category";;
import Brand from "../../../db/models/brands";;
import Models from "../../../db/models/models";;
import {ProductAttributes} from "../../../db/models/types";
 


const productoForCategory = async(parent, args, context, info)=>{
  const productsCategory = await Category.findAll({
  	where:{
	  name:args.name
	},
	include:{model: Product,include:[Brand as any,Models as any]}
  })
  
  return productsCategory
}

export default productoForCategory 

