import Brand from "../../../db/models/brands";
import {BrandAttributes} from '../../../db/models/types'

const createCategoryResolver = async (parent: any,{name}: BrandAttributes, context: any , info: any) =>{
  if(context.req.userId){
    return await Brand.create({name});
  }else{
    return {
      name: "Sin token",
      id:2
    }
  }
}

export default createCategoryResolver