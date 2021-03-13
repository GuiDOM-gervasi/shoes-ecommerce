import Brand from "../../../db/models/brands";
import Product from "../../../db/models/products";
import Category from "../../../db/models/category";
import Models from '../../../db/models/models';
import {BrandAttributes, CategoryAttributes, ModelAttributes} from '../../../db/models/types'

const productResolver = async () => {
  return await Product.findAll({
    include: [Brand as any, Category as any, Models as any],
  });
};

export default productResolver;
