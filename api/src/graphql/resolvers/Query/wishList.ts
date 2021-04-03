import Product from "#root/db/models/products";
import wishList from "#root/db/models/wishList";

type arg = {
    userId: string
}

const wishListResolver = async( parent:any, {userId}: arg ) => {

    return await wishList.findAll({
        where:{
            userId
        },
        include: [Product as any]
    })
}

export default wishListResolver;