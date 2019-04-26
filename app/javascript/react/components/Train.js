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

    if (this.state.train.reviews) {
    reviews = this.state.train.reviews.map(review => {
      return (
        <Review key={review.id} review={review} />
      )
    })
  }

    return (
      <div>
        <h1> {this.state.train.name} </h1>
        { reviews }
        <a href={`/trains/${this.state.train.id}/reviews/new`}>Review This Train</a>
      </div>
    )
  }
}

export default Train
