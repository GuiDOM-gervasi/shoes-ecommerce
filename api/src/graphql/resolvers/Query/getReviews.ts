import Review from "#root/db/models/review";
import User from "#root/db/models/users";

const getReview = async (parent:any, {productId} )  => {
  
  let search = await Review.findAll({
        where: {
          productId  
        },
        // include: [ User as any ]
  })

  // console.log(search)
  // let count = search.length
  // console.log('count: ' , count)
  // let average = search.reduce((ac, i) => ac = ac + parseFloat(i.score) ) / count;
  // console.log('average: ', average)

  return search
}

export default getReview;