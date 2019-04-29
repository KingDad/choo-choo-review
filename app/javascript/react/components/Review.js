import React, { Component } from 'react'

class Review extends Component {
  constructor(props) {
    super(props)
    this.grabID = this.grabID.bind(this)
  }

  grabID(){
    return this.props.review.id
  }

  render() {
    return (
      <div className="review">
        <p>{this.props.review.rating} Stars -  { this.props.review.description }</p>
        <div className="button-div">
          <button className={`up-vote-button ${this.props.color}`} onClick={this.props.handleUpVote(this.grabID())}><i className="far fa-thumbs-up"></i>{ this.props.review.up_votes }</button>
          <button className={`down-vote-button ${this.props.color}`}><i className="far fa-thumbs-down"></i>{ this.props.review.down_votes }</button>
        </div>
      </div>
    )
  }
}

export default Review;
