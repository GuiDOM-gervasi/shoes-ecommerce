import ProductModel  from './../../../db/models/productmodel';
import Brand from "../../../db/models/brands";
import Product from "../../../db/models/products";
import Category from "../../../db/models/category";
import Models from '../../../db/models/models';



const productResolver = async () => {
	var products = await Product.findAll({
		include: [Brand as any, Category as any, Models as any ],
	});
	return products.sort(function(a,b){
		if(a.id > b.id){
			return 1;
		}else{
			return -1;
		}
	})      
};

export default productResolver;
