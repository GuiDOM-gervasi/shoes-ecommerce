import React, { useEffect } from "react";
import { StyledReviews } from "./StyledReviews";
import { useQuery } from "@apollo/client";
import {GET_REVIEWS} from "../../graphql/queries";
import Review from "../../components/Review";
import { ratingStars } from "./ratingStars";


interface ReviewsAttributes {
  className: String;
  productId: String;
}

export default function Reviews({ className, productId }: ReviewsAttributes, props) {

  const {data, loading , error} = useQuery(GET_REVIEWS, {
    variables: {
      productId
    },})  
  if(loading){return <div>Loading...</div>}
  if(data){
    var reviews = data.getReviews.reviews
    console.log("id", reviews[0].id)
  }
  return (
    <StyledReviews>
      <h2>{data.getReviews.average}</h2>
      <h3>Promedio sobre {data.getReviews.count} opiniones</h3>
      <ul>
        {reviews.map(review =>
          <li><Review  className="review" id={review.id} description={review.description} score={review.score} title={review.title} /></li>
        )}
      </ul>
    </StyledReviews>
  );
}
