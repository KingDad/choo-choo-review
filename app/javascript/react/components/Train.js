import React, { Component } from 'react';
import Review from './Review'

class Train extends Component {
  constructor(props) {
    super(props);
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

  render() {
    let reviews
    let lineName

    if (this.state.train.reviews) {
      reviews = this.state.train.reviews.map(review => {
        return (
          <Review key={review.id} review={review} />
        )
      })
    }

    if (this.state.train.name) {
      lineName = `${this.state.train.name.toUpperCase()} LINE`;
    }

    return (
      <div>
        <h1 className={`react-header ${this.state.train.name}`}>{lineName}</h1>
        <p>{this.state.train.description}</p>
        { reviews }
        <a href={`/trains/${this.state.train.id}/reviews/new`}>Review This Train</a>
      </div>
    )
  }
}

export default Train
