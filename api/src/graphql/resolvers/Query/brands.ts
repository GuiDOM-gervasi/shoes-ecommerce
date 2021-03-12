import { Brand } from '../../../db/models';

const BrandResolver = () => {
  return Brand.findAll();
}

export default BrandResolver;