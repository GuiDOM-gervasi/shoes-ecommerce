import { Op } from "sequelize";
import { ProductModel } from "../../../db/models/productmodel";

const addImage = async (parent:any, args )  => {
    const {idProduct,idModel,input} = args

    try {
        await ProductModel.update( {img:input} , {
            where: {
                [Op.and]: [
                    { modelId: idModel },
                    { productId: idProduct }
                ]
        }})
    
    } catch (error) {
        return `can't update successfully: ${error}`
    }
    
    return `update successfully producto:  ${idProduct}, modelo:  ${idModel}`;
    
}

export default addImage;