import CartProduct from '#root/db/models/cartproduct';
import { CartProductAttributes } from '#root/db/models/types';


const addToCartResolver = async (context: any, {finalproductId, cartId, price, quantity}: CartProductAttributes) =>{
  
    return await CartProduct.create({finalproductId, cartId, price, quantity});
}
  
export default addToCartResolver;