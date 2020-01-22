import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner, faArrowAltCircleLeft)


export default class Pop extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
        id: [],
        didMount: false,
      }
    }
    
    componentDidMount() {
      const API_KEY = process.env.REACT_APP_API_KEY; 
      const imgUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      fetch(imgUrl)
      .then(response => response.json())
      .then(data => this.setState({
        movies: data.results,
        id: data.results.id,
        didMount: true,
        })
      )
    }

    render() {
      let ready = this.state.didMount;
      /* LOGO ANIMATION WHILE THE PAGE LOADS */
      if (ready === false) {
          return (
            <div class="App-logo"></div>
          )
      }
        return (
            <div id="movies-container">
            <h2>Popular</h2>
            {this.state.movies.slice(0, 18).map((movie, index) =>(
                <Link to={{ 
              pathname: `/movie/${movie.id}`,
              state: {
                didMount: true,
                movies: movie.title,
                id: movie.id,
                key: index,
                }
            }}>
              <img key={this.state.key} className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster Missing Missing"/>
              </Link>
              ))}
            </div>
        )
      
    }
  }
