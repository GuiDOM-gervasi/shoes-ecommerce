import ProductCategory from "#root/db/models/productcategory";
import { handlerUpdate } from "#root/helpers/handlerUpdate";
import Product from "../../../db/models/products";
import ProductModel from "#root/db/models/productmodel"
const updateProduct = async (parent, args, context, info)  => {
    const {id,atr,input} = args
    
    const prod = await Product.findByPk(parseInt(id))
    if(atr === "categories"){
        await ProductCategory.destroy({
            where: {
                productId:id
            },
            force: true
        })
        prod.$add("categories",input)
    }
    
    if(atr === "model"){
        await ProductModel.destroy({
            where: {
                productId:id
            },
            force: true
        })
        prod.$add("models",input)
    }

    const update = await Product.update(handlerUpdate(atr,input),{
        where:{
            id: id
        }
    })
    
    return prod
}

export default updateProduct