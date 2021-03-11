import { Product } from '../../../db/models';

const productResolver = () => {
  return Product.findAll();
}

export default productResolver;
