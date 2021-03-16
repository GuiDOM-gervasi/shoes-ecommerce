import { Op } from "sequelize";
import { ProductModel } from "../../../db/models/productmodel";

const addImage = async (parent:any, args )  => {
    const {idProduct,idModel,input} = args

    const handlerAdd = (image) => {
        return {
            img: image
        }
    }

    const update = await ProductModel.update( handlerAdd(input), {
        where: {
            [Op.and]: [
              { productId: idProduct },
              { modelId: idModel }
            ]
    }})
    
    return `update successfully producto:  ${idProduct}, modelo:  ${idModel}`;
}

export default addImage;