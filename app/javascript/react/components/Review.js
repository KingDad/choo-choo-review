import React from 'react'
import Vote from './Vote'

const Review = props => {
  return(
    <div className="review">
      <p>{props.review.rating} Stars -  { props.review.description }</p>
    </div>
  )
}

export default Review;
