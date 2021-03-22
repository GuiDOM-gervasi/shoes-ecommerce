import Cart from '#root/db/models/carts';
import CartProduct from '../../../db/models/cartproduct';

const removeformcartresolver = async (parent, {finalproductId} ) => {
    if (finalproductId === 'empty'){
        await Cart.destroy( {force: true} );
        return 'The cart was successfully emptied'; 
    }else{
        await CartProduct.destroy({
            where:{
                finalproductId
            },
            force: true
        })
        return 'The final product was successfully removed';
    }
}

export default removeformcartresolver;