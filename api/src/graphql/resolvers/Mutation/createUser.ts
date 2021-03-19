import User from "../../../db/models/users";
import { UserAttributes } from '../../../db/models/types'
import * as bcrypt from "bcryptjs";
const createUserResolver = async (parent: any,{
  firstName,
  lastName,
  userName,
  isAdmin,
  email,
  password,
  nlsuscribe
}: UserAttributes, context: any , info: any) =>{
  // console.log(firstName)
    const hashPassword = await bcrypt.hash(password,5)
    let aux = await User.create({
      firstName,
      lastName,
      userName,
      isAdmin,
      email,
      password: hashPassword,
      nlsuscribe,
      count: 1
     });
    // console.log(aux)
    return aux
}


export default createUserResolver