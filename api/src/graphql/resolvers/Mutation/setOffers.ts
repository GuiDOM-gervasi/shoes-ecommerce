import ProductCategory from "#root/db/models/productcategory";
import Category from "#root/db/models/category";
import { handlerUpdate } from "#root/helpers/updateProduct";
import Product from "../../../db/models/products";
import FinalProduct from "#root/db/models/finalproduct";
import {UpdateProductAttributes} from '../../../db/models/types';
import { any } from "sequelize/types/lib/operators";
import { BeforeBulkCreate } from "sequelize-typescript";


const setOffers = async ( parent:any, args: any )  => {
    let {target, targetId, discount, duration} = args
    duration = duration * 60 * 60 * 1000; // change from hours to miliseconds
    let productsToUpdate = [];
    switch (target){
      case "category":
        
        let prod = await Product.findAll(
          {
            include: {
              model: Category as any,
              where: {
                id: targetId
              }
              
            }
          }
        )
        prod.forEach(element => {
          productsToUpdate.push(element.id);     
        });
        break;

      case "product":
        productsToUpdate.push(targetId);
        break;

      default:
        return "please check the target field"
      
    }

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