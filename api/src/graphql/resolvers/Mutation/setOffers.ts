import ProductCategory from "#root/db/models/productcategory";
import Category from "#root/db/models/category";
import { handlerUpdate } from "#root/helpers/updateProduct";
import Product from "../../../db/models/products";
import FinalProduct from "#root/db/models/finalproduct";
import {UpdateProductAttributes} from '../../../db/models/types';
import { any } from "sequelize/types/lib/operators";


const setOffers = async ( parent:any, args: any )  => {
    let {categoryId, discount} = args
    
    let prod = await Product.findAll(
      {
        include: {
          model: Category as any,
          where: {
            id: categoryId
          }
          
        }
      }
    )
      
    let update = await Product.update(
      {discount},
      {where: 
        { id: [2, 4, 8]} 
      }
    ) 
    // console.log(`prod`, prod)
    console.log(`update`, update)
    return "todo Ok"
}

export default setOffers