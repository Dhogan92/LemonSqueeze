import React from 'react';
import {BrowserRouter, Link, Route } from "react-router-dom";


class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      movies: [],
      id: [],
      didMount: false,
    }
  }

  componentDidMount(){
    this.setState({
      movies: this.props.movies,
      id: this.props.movies.id,
      didMount: false,
    })
  }
  render() {
    let ready = this.state.didMount;
    if (ready === false) {
        return (
          <div class="App-logo"></div>
        )
    }
    return (
      <div className="row">
  
     
      
     
      </div>
    );
  }
}

export default Movies;
