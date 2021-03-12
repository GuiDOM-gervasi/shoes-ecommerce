import { Brand, Category, Product } from "../../../db/models";

const productResolver = () => {
  return Product.findAll({
    include: [Brand as any, Category as any],
  });
};

export default productResolver;
