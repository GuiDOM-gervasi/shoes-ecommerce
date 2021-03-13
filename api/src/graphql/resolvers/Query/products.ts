import Brand from "../../../db/models/brands";
import Product from "../../../db/models/products";
import Category from "../../../db/models/category";


const productResolver = () => {
  return Product.findAll({
    include: [Brand as any, Category as any],
  });
};

export default productResolver;
