import React, { Component } from 'react'

class Review extends Component {
  constructor(props) {
    super(props)
    this.grabID = this.grabID.bind(this)
    this.getVoteID = this.getVoteID.bind(this)
    this.clickUpVote = this.clickUpVote.bind(this)
    this.clickDownVote = this.clickDownVote.bind(this)
    this.state = {
      upVotes: this.props.review.up_votes,
      downVotes: this.props.review.down_votes,
      selectedVoteType: this.props.review.current_user_vote_type
      // dummyVote: false
    }
  }

  grabID(){
    return this.props.review.id
  }

  getVoteID(vote){
    if (vote.user_id === this.props.userID && vote.review_id === this.grabID()){
      return vote.id
    }
  }

  clickUpVote(){
    let newUpVotes = this.state.upVotes
    let newDownVotes = this.state.downVotes
    // let voteID = null
    let voteType = this.state.selectedVoteType
    // this.props.review.votes.forEach(vote =>{
    //   if (this.getVoteID(vote)) {
    //     voteID = vote.id
    //     // voteType = vote.vote_type
    //   }
    // })
    // if (!voteType) {
    //   this.setState({dummyVote: true})
    // }
    this.props.handleUpVote(this.grabID())
    if (this.state.selectedVoteType === "up") {
      newUpVotes -= 1
      this.setState({
        selectedVoteType: "",
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
    // let voteID = null
    let voteType = this.state.selectedVoteType
    // this.props.review.votes.forEach(vote =>{
    //   if (this.getVoteID(vote)) {
    //     voteID = vote.id
    //     voteType = vote.vote_type
    //   }
    // })
    // if (!voteID && this.state.dummyVote === false) {
    //   this.setState({dummyVote: true})
    // }
    this.props.handleDownVote(this.grabID())
    if (this.state.selectedVoteType === "down") {
      newDownVotes -= 1
      this.setState({
        selectedVoteType: "",
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
        <p>{this.props.review.rating} Stars -  { this.props.review.description }</p>
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
