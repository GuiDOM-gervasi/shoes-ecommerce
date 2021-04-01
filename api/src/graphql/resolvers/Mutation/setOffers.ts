import ProductCategory from "#root/db/models/productcategory";
import Category from "#root/db/models/category";
import { handlerUpdate } from "#root/helpers/updateProduct";
import Product from "../../../db/models/products";
import FinalProduct from "#root/db/models/finalproduct";
import {UpdateProductAttributes} from '../../../db/models/types';
import { any } from "sequelize/types/lib/operators";


const setOffers = async ( parent:any, args: any )  => {
    let {categoryId, discount} = args
    let duration = 0.05 * 60 * 60 * 1000; 
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
    
    let productsToUpdate = [];
    prod.forEach(element => {
      productsToUpdate.push(element.id)      
    });

    let update = defineOffert(discount, productsToUpdate);

    let restore = setTimeout( defineOffert, duration, 0, productsToUpdate);  // DO NOT USE AWAIT HERE!
    // console.log(`prod`, prod)
    // console.log(`update`, update)
    return "todo Ok"
}

async function defineOffert(discount: number, productsToUpdate: string[]){
  let update = await Product.update(
    {discount},
    {where: 
      { id: productsToUpdate} 
    }
  ) 
  
  if (discount === 0){
    console.log('offert has finished')
  }
  return update
}

export default setOffers