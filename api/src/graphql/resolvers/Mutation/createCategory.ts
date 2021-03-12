import {Category, CategoryAttributes} from "../../../db/models";

const createCategoryResolver = async (context: any, {name}: CategoryAttributes) =>{
  
  return await Category.create({name});
}

export default createCategoryResolver