import React from 'react';
<<<<<<< HEAD

=======
import {BrowserRouter, Link, Route } from "react-router-dom";
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7


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
