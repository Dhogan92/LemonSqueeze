import React from 'react';
import { Link } from 'react-router-dom';

var xhr;
const API_KEY = process.env.REACT_APP_API_KEY; 
const Url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

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
            <div id="movies-container">
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
              <img key={index} className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster Missing"/>
              </Link>
              ))}
            </div>
        );
      
    }
  }