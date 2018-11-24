import React, { Component } from 'react';
import { Link } from 'react-router-dom';
let xhr;
const api_key = '93e2bc1e40111d08ed5b475d4fa2546f'; 
const Url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`;


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          movies: [],
          didMount: false,
        }; 
        this.latestRequest = this.latestRequest.bind(this);
      }
    
      componentDidMount = () => {
        xhr = new XMLHttpRequest();
        xhr.open("GET", Url, true);
        xhr.send();
        xhr.addEventListener("readystatechange", this.latestRequest, false);
        xhr.onerror = function(e){
          console.error(xhr.statusText)
        }
      }
    
      latestRequest = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
          var obj = JSON.parse(xhr.responseText);
              
          this.setState({
            value: '',
            movies: obj.results,
            didMount: true,
          })
          console.log(this.state.movies)
        }
      }
    
    render() {
      let ready = this.state.didMount;
      if (ready === false) {
          return (
            <div class="App-logo"></div>
          )
      }
        let latestMovies = this.state.movies;
        return (
          <div>
          <div id="popular-container">
          <h2>Now Playing</h2>
            {latestMovies.slice(0, 18).map((movie, index) =>(
             
              
              <Link to={{ 
            pathname: `/movie/${movie.id}`,
            state: {
              didMount: true,
              movies: movie.title,
              id: movie.id,
              }
          }}>
            <img key={index} className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster"/>
            </Link>
            
             
            ))}
          </div>
        </div>
        );
    }
}

export default Home;
