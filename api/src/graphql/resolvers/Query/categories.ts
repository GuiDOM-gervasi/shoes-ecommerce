import Category from '../../../db/models/category';

const CategoriesResolver = async() => {
	var categories = await Category.findAll();
	return categories.sort(function(a,b){
		if(a.id > b.id){
			return 1
		}else{
			return -1
		}
	})
}

export default CategoriesResolver;
