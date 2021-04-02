import WishList from "#root/db/models/wishlist";

const addToWishListResolver = async (parent:any, {userId, productId}) => {
    
    const [wishList] = await WishList.findOrCreate({
        where:{
            userId,
            productId
        }
    })
    return "Success"
};

export default addToWishListResolver