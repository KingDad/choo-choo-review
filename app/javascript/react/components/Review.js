import React from 'react'

const Review = props => {
  return(
    <div>
      <p>{ props.review.rating }</p>
      <p>{ props.review.description }</p>
    </div>
  )
}

export default Review;
