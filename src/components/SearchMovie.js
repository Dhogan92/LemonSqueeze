import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon, faUser, faSearch, faRedo } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Link } from 'react-router-dom';
import Movies from './Movies';
library.add(faLemon, faUser, faSearch, faRedo)
var xhr;

export default class SearchMovie extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        value: '',
        movies: [],
        didMount: true,
      };
      this.popularRequest = this.popularRequest.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {
      const title = this.state.value;
      const API_KEY = process.env.REACT_APP_API_KEY;  
      const Url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`;
      xhr = new XMLHttpRequest();
      xhr.open("GET", Url, true);
      xhr.send();
      xhr.addEventListener("readystatechange", this.popularRequest, false);
      xhr.onerror = function(e){
      console.error(xhr.statusText)
      }
      event.preventDefault();
    }
    
    componentDidMount = async () => {
      this.setState({
        value: '',
        movies: [],
        didMount: true,
      })
    }
    
    popularRequest() {
      if(xhr.readyState === 4 && xhr.status === 200) {
        var obj = JSON.parse(xhr.responseText);
        
        this.setState({
          value: '',
          movies: obj.results,
          didMount: true,
        })
        console.log(obj)
      }
      return false;
    }
  
    render() {
        return (
         

          <div id="search-form" >
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <h5>FIND A MOVIE</h5>
                </fieldset>
                <div>
                  <div>
                    <input type="text" id="movie-title" value={this.state.value} onChange={this.handleChange}/>
                    <button id="search-btn" type="submit" class="btn-sm"><FontAwesomeIcon icon="search"/></button>
                  </div>
                </div>
                
                </form>
                { this.state.movies.slice(0,3).map((movies) => {
                return (
                <Link to={{
                  key: movies.id ,
                  pathname: `/movie/${movies.id}`,
                  state: { 
                    movies: movies.title,
                    id: movies.id,
                    }
                }}><img key={movies.id} className="movie-img-results" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="Movie Poster Missing"/>
                </Link>  
               
        );
      })}
          </div>
         
        );
      
    }
  }

  /* <div>
                    <Grid>
                      <Row>
                        <Col xs={12} md={12}>
                        <Link to ={{
                          pathname: '/movies',
                          state: {
                            movie: this.state.movies
                          }
                        }}>
                          {this.state.movies.slice(0, 4).map((movie, index) =>(

                          <img key={index} className="movie-img-results" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster Missing"/>

                          ))}
                        </Link>
                       
                        </Col>
                      </Row>
                    </Grid>
                  </div> */