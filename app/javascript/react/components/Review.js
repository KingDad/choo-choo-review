import React from 'react'
import Vote from './Vote'

const Review = props => {
  return(
    <div>
      <p>{ props.review.rating }</p>
      <p>{ props.review.description }</p>
    </div>
  )
}

export default Review;
