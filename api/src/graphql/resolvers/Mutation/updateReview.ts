import Review from "#root/db/models/Review";

const updateReview = async (parent:any, {id, title, score, description} )  => {
  
  try{
       let response = await Review.update(
        {
          title,
          score,
          description
        },
        {
         where: { id }
        }
    )
    console.log(response)
    return response
  }
  catch(e){
    console.error(e)
    return{
        id: "0",
        productId: "0",
        userId: "0",
        title: "ERROR",
        score: 9999,
        description: "somethign go wrong trying to updating the review"
      }
  }
  
}

export default updateReview;