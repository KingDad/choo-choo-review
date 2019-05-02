import React, { Component } from 'react';
import Review from './Review'

class Train extends Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this)
    this.handleDownVote = this.handleDownVote.bind(this)
    this.state = {
      train: {},
      userID: null,
      reviews: []
    }
  }

  componentDidMount() {
    let trainId = this.props.params.id
    fetch(`/api/v1/trains/${trainId}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})` ,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(response => {
        let train = response.train
        this.setState( {
          train: train,
          userID: train.user_id,
          reviews: train.reviews
        } )
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleUpVote(reviewID){
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    fetch(`/api/v1/votes`, {
      method: 'POST',
      body: JSON.stringify({review_id: reviewID, user_id: this.state.userID, vote_type: 'up'}),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'same-origin'
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})` ,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleDownVote(reviewID){
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    fetch(`/api/v1/votes`, {
      method: 'POST',
      body: JSON.stringify({review_id: reviewID, user_id: this.state.userID, vote_type: 'down'}),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'same-origin'
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})` ,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let reviews
    let lineName
    let reviewsHeaderText

    if (this.state.train.reviews) {
      reviews = this.state.reviews.map(review => {
        return (
          <Review
            key={review.id}
            review={review}
            color={this.state.train.name}
            handleUpVote={this.handleUpVote}
            handleDownVote={this.handleDownVote}
            userID={this.state.userID}
          />
        )
      })
      if (this.state.train.reviews.length > 0) {
        reviewsHeaderText = "Reviews for This Train Line"
      }
    }


    if (this.state.train.name) {
      lineName = `${this.state.train.name.toUpperCase()} LINE`;
    }

    return (
      <div>
        <h1 className={`react-header ${this.state.train.name}`}>{lineName}</h1>
        <p className="train-description">{this.state.train.description}</p>
        <h3>{ reviewsHeaderText }</h3>
        { reviews }
        <a href={`/trains/${this.state.train.id}/reviews/new`}>Review This Train</a>
      </div>
    )
  }
}

export default Train
