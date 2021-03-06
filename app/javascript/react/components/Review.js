import React, { Component } from 'react'

class Review extends Component {
  constructor(props) {
    super(props)
    this.grabID = this.grabID.bind(this)
    this.starOrStars = this.starOrStars.bind(this)
    this.clickUpVote = this.clickUpVote.bind(this)
    this.clickDownVote = this.clickDownVote.bind(this)
    this.state = {
      upVotes: this.props.review.up_votes,
      downVotes: this.props.review.down_votes,
      selectedVoteType: this.props.review.current_user_vote_type
    }
  }

  grabID(){
    return this.props.review.id
  }

  starOrStars(){
    if (this.props.review.rating > 1) {
      return `${this.props.review.rating} Stars`
    }
    else {
      return `${this.props.review.rating} Star`
    }
  }

  clickUpVote(){
    let newUpVotes = this.state.upVotes
    let newDownVotes = this.state.downVotes
    let voteType = this.state.selectedVoteType
    this.props.handleUpVote(this.grabID())
    if (this.state.selectedVoteType === "up") {
      newUpVotes -= 1
      this.setState({
        selectedVoteType: "none",
        upVotes: newUpVotes
      })
    } else if (this.state.selectedVoteType === "down") {
      newUpVotes += 1
      newDownVotes -= 1
      this.setState({
        selectedVoteType: "up",
        upVotes: newUpVotes,
        downVotes: newDownVotes
      })
    } else {
      newUpVotes += 1
      this.setState({
        selectedVoteType: "up",
        upVotes: newUpVotes
      })
    }
  }

  clickDownVote(){
    let newUpVotes = this.state.upVotes
    let newDownVotes = this.state.downVotes
    let voteType = this.state.selectedVoteType
    this.props.handleDownVote(this.grabID())
    if (this.state.selectedVoteType === "down") {
      newDownVotes -= 1
      this.setState({
        selectedVoteType: "none",
        downVotes: newDownVotes
      })
    } else if (this.state.selectedVoteType === "up") {
      newUpVotes -= 1
      newDownVotes += 1
      this.setState({
        selectedVoteType: "down",
        upVotes: newUpVotes,
        downVotes: newDownVotes
      })
    } else {
      newDownVotes += 1
      this.setState({
        selectedVoteType: "down",
        downVotes: newDownVotes
      })
    }
  }

  render() {
    return (
      <div className="review">
        <p>{this.starOrStars()} -  { this.props.review.description }</p>
        <div className="button-div">
          <button
            className={`up-vote-button ${this.props.color}`}
            onClick={this.clickUpVote}
          >
            <i className="far fa-thumbs-up"></i>
            { this.state.upVotes }
          </button>
          <button
            className={`down-vote-button ${this.props.color}`}
            onClick={this.clickDownVote}
          >
            <i className="far fa-thumbs-down"></i>
            { this.state.downVotes }
          </button>
        </div>
      </div>
    )
  }
}

export default Review;
