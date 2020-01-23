import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner, faArrowAltCircleLeft)


=======
import {BrowserRouter as Router, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner, faArrowAltCircleLeft)

>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
export default class Pop extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
        id: [],
        didMount: false,
      }
<<<<<<< HEAD
    }
    
    componentDidMount() {
      const API_KEY = process.env.REACT_APP_API_KEY; 
      const imgUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
=======
     
    }
    
    componentDidMount() {
      const api_key = '93e2bc1e40111d08ed5b475d4fa2546f'; 
      const imgUrl = "https://api.themoviedb.org/3/movie/popular?api_key="+api_key+"&language=en-US&page=1";
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
      fetch(imgUrl)
      .then(response => response.json())
      .then(data => this.setState({
        movies: data.results,
        id: data.results.id,
        didMount: true,
<<<<<<< HEAD
        })
      )
    }

    render() {
      let ready = this.state.didMount;
      /* LOGO ANIMATION WHILE THE PAGE LOADS */
=======
      }))
    
     
    }

  
    render() {
      let ready = this.state.didMount;
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
      if (ready === false) {
          return (
            <div class="App-logo"></div>
          )
      }
        return (
<<<<<<< HEAD
            <div id="movies-container">
            <h2>Popular</h2>
            {this.state.movies.slice(0, 18).map((movie, index) =>(
=======
          <div>
            <div id="popular-container">
            <h2>Popular</h2>
              {this.state.movies.slice(0, 18).map((movie, index) =>(
               
                
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
                <Link to={{ 
              pathname: `/movie/${movie.id}`,
              state: {
                didMount: true,
                movies: movie.title,
                id: movie.id,
<<<<<<< HEAD
                key: index,
                }
            }}>
              <img key={this.state.key} className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster Missing Missing"/>
              </Link>
              ))}
            </div>
=======
                }
            }}>
              <img key={index} className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster"/>
              </Link>
              
               
              ))}
            </div>
          </div>
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
        )
      
    }
  }
<<<<<<< HEAD
=======

  /* {this.state.movies.slice(0, 16).map((movie) =>(
            <div key={movie.id}>
            <h3>{movie.title}!</h3>
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster"/></div>
            ))} */
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
