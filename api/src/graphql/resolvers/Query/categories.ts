import Category from '../../../db/models/category';

const CategoriesResolver = () => {
  return Category.findAll();
}

export default CategoriesResolver;