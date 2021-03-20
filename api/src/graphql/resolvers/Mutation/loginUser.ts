import User from "../../../db/models/users";
import { UserAttributes } from '../../../db/models/types';
import * as bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken"

const loginUser = async (parent: any, args: any , context: any , info: any ) =>{
  let aux = await User.findOne({
    where: {
      email: args.email
    }
  })

  const verify = await bcrypt.compare(args.password, aux.password)
  
  if(!verify){
    return null
  }

  const refreshToken = sign(
    { id: aux.id, count: aux.count, isAdmin: aux.isAdmin },
    process.env.REFRESH_TOKEN_SECRET!, 
    {
      expiresIn: "7d"
    }
  );
  const accessToken = sign({ id: aux.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15min"
  });

  context.res.cookie("refresh-token", refreshToken, { domain: 'localhost', path: '/' });
  context.res.cookie("access-token", accessToken,{ domain: 'localhost', path: '/' });
  return { id: aux.id, isAdmin: aux.isAdmin, accessToken, refreshToken };
}

export default loginUser