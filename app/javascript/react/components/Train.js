import React, { Component } from 'react';

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
    return (
      <h1> {this.state.train.name} </h1>
    )
  }
}

export default Train
