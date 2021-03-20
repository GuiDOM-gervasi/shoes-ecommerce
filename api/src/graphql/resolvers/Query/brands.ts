import Brand from '../../../db/models/brands';

const BrandResolver = async() => {
	var brands = await Brand.findAll();
	return brands.sort(function(a,b){
		if(a.id > b.id){
			return 1
		}else{
			return -1
		}
	})
}

export default BrandResolver;
