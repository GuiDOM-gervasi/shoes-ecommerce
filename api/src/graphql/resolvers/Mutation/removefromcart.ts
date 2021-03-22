import CartProduct from '../../../db/models/cartproduct';

const removeformcartresolver = async (parent, {cartId, finalproductId} ) => {
    if (finalproductId === 'empty'){
        await CartProduct.destroy( 
            {   
                where:{
                    cartId
                },
                force: true
            } );
        return 'The cart was successfully emptied'; 
    }else{
        await CartProduct.destroy({
            where:{
                cartId,
                finalproductId
            },
            force: true
        })
        return 'The final product was successfully removed';
    }
}

export default removeformcartresolver;