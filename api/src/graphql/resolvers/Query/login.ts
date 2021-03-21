import User from "../../../db/models/users";

const login = async(parent, args, context, info)=>{
  var loginDetails = await User.findOne({where:{email:args.email, password:args.password}})

    return loginDetails? true : false

}

export default login 


