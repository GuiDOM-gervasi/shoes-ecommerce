import Product from "#root/db/models/products";
import wishList from "#root/db/models/wishList";

// type arg = {
//     userId: string
// }

const wishListResolver = async( parent:any, {userId} ) => {

    return await wishList.findAll()
    // console.log('wish :', wish);
    // return wish
}

export default wishListResolver;