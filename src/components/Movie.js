import React, { Component } from 'react';
import SimilarMovie from './SimilarMovie';
import { Link, Route } from "react-router-dom";
import { Row, Col, Grid } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner, faArrowAltCircleLeft)

    

class Movie extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            didMount: false,
            activeMovie: [],
        }
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.location.state;
        const API_KEY = process.env.REACT_APP_API_KEY;  
        const Url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        fetch(Url)
        .then(response => response.json())
        .then(data => 
            this.setState({ 
                didMount: true,
                activeMovie: data
              })
        )
    }

    goBack() {
        this.props.history.goBack();
    }
    

    render() {
        let ready = this.state.didMount;
        if (ready === false) {
            return (
                <div class="App-logo"></div>
            )
        }
        let sglMovie = this.state.activeMovie;
        console.log(sglMovie);
        return (
         
               
            <Grid fluid>
                 <FontAwesomeIcon onClick={this.goBack} icon="arrow-alt-circle-left" className="back-logo" alt="logo" />
                <Row className="show-grid">
                <h2 className="sgl-mve-title">{sglMovie.title}</h2>
                    <Col className="cntnr-lt" sm={4}>
                       
                        <img className="sgl-movie-img" src={`https://image.tmdb.org/t/p/w500/${sglMovie.poster_path}`} alt="Movie Poster Missing"/>
                        <p>"{sglMovie.tagline}"</p>
                    </Col>

                    <Col className="cntnr-rt" sm={8}>
                        <Row around="xs">
                            <Col className="stats" xs={4}>
                                <h2 className="mve-stats-title">POPULARITY: </h2>
                                <p className="mve-stats">{sglMovie.popularity}</p>
                            </Col>

                            <Col className="stats" xs={4}>
                                <h2 className="mve-stats-title">VOTES: </h2>
                                <p className="mve-stats">{sglMovie.vote_count}</p>
                            </Col>

                            <Col className="stats" xs={4}>
                                <h2 className="mve-stats-title">AVG: </h2>
                                <p className="mve-stats">{sglMovie.vote_average}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div className="movie-ovrvw">
                                    <p>{sglMovie.overview}</p>
                                    <hr className="divdr"></hr>
                                    <p className="run-time-txt">Runtime: {sglMovie.runtime} mins</p>
                                </div>
                                <a className="xtnrl-lnk" target="blank" href={sglMovie.homepage}>{sglMovie.homepage}</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
          
        );
    }
}

export default Movie;


