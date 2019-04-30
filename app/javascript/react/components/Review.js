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
    this.props.handleUpVote(this.grabID())
    let voteID = null
    let voteType = ""
    this.props.review.votes.forEach(vote =>{
      if (this.getVoteID(vote)) {
        voteID = vote.id
        voteType = vote.vote_type
      }
    })
    if (voteID) {
      if (this.state.selectedVoteType === "up") {
        newUpVotes -= 1
        this.setState({
          selectedVoteType: "",
          // selectedVoteID: voteID,
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
  }

  clickDownVote(){
    let newDownVotes = this.state.downVotes
    let newUpVotes = this.state.upVotes

    this.props.handleDownVote(this.grabID())
    if (this.state.selectedVoteType === "down") {
      this.setState({
        selectedVoteType: "",
        downVotes: newDownVotes--
      })
    } else if (this.state.selectedVoteType === "up") {
      this.setState({
        selectedVoteType: "down",
        upVotes: newUpVotes--,
        downVotes: newDownVotes++
      })
    } else {
      this.setState({
        selectedVoteType: "down",
        downVotes: newDownVotes++
      })
    }
  }

  // componentDidMount(){
  //   let selectedVoteID = this.getVoteID()
  //   let selectedVoteType = this.props.review.votes[selectedVoteID].vote_type
  //   this.setState({
  //     selectedVoteID: selectedVoteID,
  //     selectedVoteType: selectedVoteType
  //   })
  // }

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
