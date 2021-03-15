import User from "../../../db/models/users";
import { UserAttributes } from '../../../db/models/types'

const createUserResolver = async (context: any, {firstName}: UserAttributes) =>{
  let user = await User.create({firstName});
  return user
}

export default createUserResolver