import {User, UserAttributes} from "../../../db/models";

const createUserResolver = async (context: any, {firstName}: UserAttributes) =>{
  // console.log(firstName)
  let aux = await User.create({firstName});
  // console.log(aux)
  return aux
}

export default createUserResolver