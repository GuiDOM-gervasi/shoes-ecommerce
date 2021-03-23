import Review from "#root/db/models/review";

const deleteReview = async (parent:any, {id} )  => {
  
  let response = await Review.destroy({ where: { id } })

  console.log(response) 

  return 'ok'
}
export default deleteReview;