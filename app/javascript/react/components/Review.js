import React, { Component } from 'react'

class Review extends Component {
  constructor(props) {
    super(props)
    this.grabID = this.grabID.bind(this)
    this.clickUpVote = this.clickUpVote.bind(this)
    this.clickDownVote = this.clickDownVote.bind(this)
    this.state = {
      upVotes: this.props.review.up_votes,
      downVotes: this.props.review.down_votes,
      selectedVote: ""
    }
  }

  grabID(){
    return this.props.review.id
  }

  clickUpVote(){
    let newUpVotes = this.state.upVotes
    let newDownVotes = this.state.downVotes
    this.props.handleUpVote(this.grabID())
    if (this.state.selectedVote === "up") {
      this.setState({
        selectedVote: "",
        upVotes: newUpVotes--
      })
    } else if (this.state.selectedVote === "down") {
      this.setState({
        selectedVote: "up",
        upVotes: newUpVotes++,
        downVotes: newDownVotes--
      })
    } else {
      this.setState({
        selectedVote: "up",
        upVotes: newUpVotes++
      })
    }
  }

  clickDownVote(){
    let newDownVotes = this.state.downVotes
    let newUpVotes = this.state.upVotes
    this.props.handleDownVote(this.grabID())
    if (this.state.selectedVote === "down") {
      this.setState({
        selectedVote: "",
        downVotes: newDownVotes--
      })
    } else if (this.state.selectedVote === "up") {
      this.setState({
        selectedVote: "down",
        upVotes: newUpVotes--,
        downVotes: newDownVotes++
      })
    } else {
      this.setState({
        selectedVote: "down",
        downVotes: newDownVotes++
      })
    }
  }

  render() {
    return (
      <div className="review">
        <p>{this.props.review.rating} Stars -  { this.props.review.description }</p>
        <div className="button-div">
          <button className={`up-vote-button ${this.props.color}`} onClick={this.clickUpVote}><i className="far fa-thumbs-up"></i>{ this.state.upVotes }</button>
          <button className={`down-vote-button ${this.props.color}`} onClick={this.clickDownVote}><i className="far fa-thumbs-down"></i>{ this.state.downVotes }</button>
        </div>
      </div>
    )
  }
}

export default Review;
