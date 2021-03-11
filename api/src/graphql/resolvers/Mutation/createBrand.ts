import {Brand, BrandAttributes} from "../../../db/models";

const createCategoryResolver = async (context: any, {name}: BrandAttributes) =>{
  
  return await Brand.create({name});
}

export default createCategoryResolver