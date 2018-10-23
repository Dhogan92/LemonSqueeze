import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';

var xhr;
const api_key = '93e2bc1e40111d08ed5b475d4fa2546f'; 
const Url = "https://api.themoviedb.org/3/trending/movie/day?api_key="+api_key;

export default class Pop extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: []
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
          movies: obj.results
        })
      }
    }
  
    render() {
        return (
          <div>
            <Router>
            <div id="popular-container">
            <h2>Trending</h2>
              {this.state.movies.slice(0, 18).map((movie, index) =>(
              <Link to ={`/`}>
              <img key={index} className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster"/>
              </Link>
              ))}
            </div>
            </Router>
          </div>
        );
      
    }
  }