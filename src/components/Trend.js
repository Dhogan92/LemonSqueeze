import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

var xhr;
const API_KEY = process.env.REACT_APP_API_KEY; 
const Url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
=======
import {BrowserRouter as Router, Link } from 'react-router-dom';

var xhr;
const api_key = '93e2bc1e40111d08ed5b475d4fa2546f'; 
const Url = "https://api.themoviedb.org/3/trending/movie/day?api_key="+api_key;
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7

export default class Pop extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
        didMount: false,
      };
      this.popularRequest = this.popularRequest.bind(this);
    }
    
    componentDidMount() {
      xhr = new XMLHttpRequest();
      xhr.open("GET", Url, true);
      xhr.send();
      xhr.addEventListener("readystatechange", this.popularRequest, false);
      xhr.onerror = function(e){
        console.error(xhr.statusText)
      }
     
    }

    popularRequest() {
      if(xhr.readyState === 4 && xhr.status === 200) {
        var obj = JSON.parse(xhr.responseText);
        
        this.setState({
          movies: obj.results,
          didMount: true,
        })
      }
    }
    
    render() {
      let ready = this.state.didMount;
      if (ready === false) {
          return (
              <div class="App-logo"></div>
          )
      }
        return (
<<<<<<< HEAD
            <div id="movies-container">
=======
          <div>
           
            <div id="popular-container">
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
            <h2>Trending</h2>
              {this.state.movies.slice(0, 18).map((movie, index) =>(
              <Link to ={{
                pathname: `/movie/${movie.id}`,
                state: {
                  didMount: true,
                  movies: movie.title,
                  id: movie.id,
                }
            }}>
<<<<<<< HEAD
              <img key={index} className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster Missing"/>
              </Link>
              ))}
            </div>
=======
              <img key={index} className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster"/>
              </Link>
              ))}
            </div>
          </div>
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
        );
      
    }
  }