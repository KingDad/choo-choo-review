import React from 'react'

const Review = props => {
  return(
    <div className="review">
      <p>{props.review.rating} Stars -  { props.review.description }</p>
    </div>
  )
}

export default Review;
