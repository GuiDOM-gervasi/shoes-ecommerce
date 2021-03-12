import Brand from '../../../db/models/brands';

const BrandResolver = () => {
  return Brand.findAll();
}

export default BrandResolver;