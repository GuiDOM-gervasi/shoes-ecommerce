import { CartAttributes } from '#root/db/models/types';
import Cart from '../../../db/models/carts';


const createCartResolver = async (context: any, {userId,state}: CartAttributes) =>{
  
    const [cart, created] = await Cart.findOrCreate({
        where: {
            userId
        },
        defaults: {userId, state}
    });

    if(created){
        return cart;
    }
    return 'This user alredy has a cart';

}
  
export default createCartResolver