import User from "../../../db/models/users";
import { UserAttributes } from '../../../db/models/types'

const createUserResolver = async (context: any, {
  firstName,
  lastName,
  userName,
  isAdmin,
  email,
  password,
  nlsuscribe
}: UserAttributes) =>{
  // console.log(firstName)
  let aux = await User.create({
    firstName,
    lastName,
    userName,
    isAdmin,
    email,
    password,
    nlsuscribe
  });
  // console.log(aux)
  return aux
}

export default createUserResolver