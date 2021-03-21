import Brand from "../../../db/models/brands";
import {BrandAttributes} from '../../../db/models/types'

const createBrandResolver = async (context: any, {name}: BrandAttributes) =>{
  
  return await Brand.create({name});
}

export default createBrandResolver