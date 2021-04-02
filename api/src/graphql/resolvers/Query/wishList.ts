import Product from "#root/db/models/products";
import WishList from "#root/db/models/wishlist";

const wishListResolver = async(parent:any,{userId}) => {
    const wishList = await WishList.findAll({
        where:{
            userId
        },
        include:[Product as any]
    })

    return wishList
}

export default wishListResolver