import { Op } from "sequelize";
import { FinalProduct } from "../../../db/models/finalproduct";

const addImage = async (parent:any, args )  => {
    const {idProduct,idModel,input} = args

    // try {
    //     await FinalProduct.update( {img:input} , {
    //         where: {
    //             [Op.and]: [
    //                 { modelId: idModel },
    //                 { productId: idProduct }
    //             ]
    //     }})
    
    // } catch (error) {
    //     return `can't update successfully: ${error}`
    // }
    
    // return `update successfully producto:  ${idProduct}, modelo:  ${idModel}`;
    
}

export default addImage;