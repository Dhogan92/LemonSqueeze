import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon, faUser, faSearch, faRedo } from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import {BrowserRouter as Router, Link } from 'react-router-dom';
import Movies from './Movies';
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
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
<<<<<<< HEAD
      const title = this.state.value;
      const API_KEY = process.env.REACT_APP_API_KEY;  
      const Url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`;
=======
      
      const title = this.state.value;
      const api_key = '93e2bc1e40111d08ed5b475d4fa2546f'; 
      const Url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${title}&page=1&include_adult=false`;
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
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
<<<<<<< HEAD
      this.setState({
        value: '',
        movies: [],
        didMount: true,
      })
    }
    
=======
      
        
     
    }
    

>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
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
<<<<<<< HEAD
                    <button id="search-btn" type="submit" className="btn-sm"><FontAwesomeIcon icon="search"/></button>
=======
                    <button id="reset-btn" type="reset" class="btn-sm"><FontAwesomeIcon icon="redo"/></button>
                    <button id="search-btn" type="submit" class="btn-sm"><FontAwesomeIcon icon="search"/></button>
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
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
<<<<<<< HEAD
                }}><img key={movies.id} className="movie-img-results" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="Movie Poster Missing"/>
=======
                }}><img key={movies.id} className="movie-img-results" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="Movie Poster"/>
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
                </Link>  
               
        );
      })}
          </div>
         
        );
      
    }
<<<<<<< HEAD
  }
=======
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

                          <img key={index} className="movie-img-results" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster"/>

                          ))}
                        </Link>
                       
                        </Col>
                      </Row>
                    </Grid>
                  </div> */
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
