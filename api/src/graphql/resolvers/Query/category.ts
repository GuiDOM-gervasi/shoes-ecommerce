import Category from '../../../db/models/category';

const oneCategoryResolver = async(name) => {
    const product = await Category.findByPk(name);
  }

export default oneCategoryResolver