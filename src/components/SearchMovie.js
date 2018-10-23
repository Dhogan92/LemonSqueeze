import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon, faUser, faSearch, faRedo } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Grid,  } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
library.add(faLemon, faUser, faSearch, faRedo)
var xhr;

export default class SearchMovie extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        value: '',
        movies: []
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
     const api_key = '93e2bc1e40111d08ed5b475d4fa2546f'; 
        const Url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${title}&page=1&include_adult=false`;
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
      
        
     
    }

    popularRequest() {
      if(xhr.readyState === 4 && xhr.status === 200) {
        var obj = JSON.parse(xhr.responseText);
        
        this.setState({
          value: '',
          movies: obj.results
        })
        console.log(obj)
      }
    }
  
    render() {
        return (
          <Router>
          <div id="search-form" >
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <h5>FIND A MOVIE</h5>
                </fieldset>
                <div>
                  <div>
                    <input type="text" id="movie-title" value={this.state.value} onChange={this.handleChange}/>
                    <button id="reset-btn" type="reset" class="btn-sm"><FontAwesomeIcon icon="redo"/></button>
                    <button id="search-btn" type="submit" class="btn-sm"><FontAwesomeIcon icon="search"/></button>
                  </div>
                  <div>
                    <Grid>
                      <Row>
                        <Col xs={12} md={12}>
                          {this.state.movies.slice(0, 4).map((movie, index) =>(

                          <img key={index} className="movie-img-results" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster"/>

                          ))} 
                        </Col>
                      </Row>
                    </Grid>
                    
                  </div>
                    
                </div>
                
                </form>  
          </div>
          </Router>
        );
      
    }
  }