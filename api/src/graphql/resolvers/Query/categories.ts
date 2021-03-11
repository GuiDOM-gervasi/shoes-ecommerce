import { Category } from '../../../db/models';

const CategoriesResolver = () => {
  return Category.findAll();
}

export default CategoriesResolver;