import {User} from "../../../db/models";

const createUserResolver = (context: any, {name}: {name:string}) =>{
  return User.create({name});
}

export default createUserResolver