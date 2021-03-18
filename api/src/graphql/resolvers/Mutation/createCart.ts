import { CartAttributes } from '#root/db/models/types';
import Cart from '../../../db/models/carts';


const createCartResolver = async (context: any, {userId,state}: CartAttributes) =>{
  
    return await Cart.create({userId,state});
}
  
export default createCartResolver