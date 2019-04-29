import React, { Component } from 'react';
import Review from './Review'

class Train extends Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this)
    this.state = {
      train: {}
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
        this.setState( {
          train: response.train
        } )
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleUpVote(reviewID){
    fetch(`/api/v1/votes`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({review_id: reviewID, type: 'up'})
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
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleDownVote(){

  }

  render() {
    let reviews
    let lineName
    let reviewsHeaderText

    if (this.state.train.reviews) {
      reviews = this.state.train.reviews.map(review => {
        return (
          <Review key={review.id} review={review} color={this.state.train.name} handleUpVote={this.handleUpVote}/>
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
