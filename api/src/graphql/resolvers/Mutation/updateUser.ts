import User from "../../../db/models/users";
import {handlerUpdateUser} from "../../../helpers/updateUser"

const updateUser = async (parent, args, context, info)  => {
    const {id,atr,input} = args

    const update = await User.update(handlerUpdateUser(atr,input),{
        where:{
            id: id
        }
    })
    
    return "update successfully";
}

export default updateUser