import ProductCategory from "#root/db/models/productcategory";
import Category from "#root/db/models/category";
import { handlerUpdate } from "#root/helpers/updateProduct";
import Product from "../../../db/models/products";
import FinalProduct from "#root/db/models/finalproduct";
import {UpdateProductAttributes} from '../../../db/models/types';


const setOffers = async ( parent:any, args: UpdateProductAttributes )  => {
    const {categoryId, discount} = args
    
    const prod = await Product.findAll(
      {
        include: {
          Category as any,
          where: {
            id: categoryId
          }
        }
      }
    )
    
    return "todo Ok"
}

export default setOffers