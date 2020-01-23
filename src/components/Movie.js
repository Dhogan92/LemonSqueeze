import React, { Component } from 'react';
<<<<<<< HEAD
import { Row, Col, Grid } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import VideoTrailer from './VideoTrailer';
import StarRating from './StarRating';
=======
import SimilarMovie from './SimilarMovie';
import { Link, Route } from "react-router-dom";
import { Row, Col, Grid } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
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
<<<<<<< HEAD
        const API_KEY = process.env.REACT_APP_API_KEY;  
        const Url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
=======
        const api_key = '93e2bc1e40111d08ed5b475d4fa2546f'; 
        const Url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
        fetch(Url)
        .then(response => response.json())
        .then(data => 
            this.setState({ 
                didMount: true,
<<<<<<< HEAD
                activeMovie: data,
                id: id,
            })
=======
                activeMovie: data
              })
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
        )
    }

    goBack() {
        this.props.history.goBack();
    }
<<<<<<< HEAD
=======
    
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7

    render() {
        let ready = this.state.didMount;
        if (ready === false) {
            return (
                <div class="App-logo"></div>
            )
        }
<<<<<<< HEAD

        let sglMovie = this.state.activeMovie;
        console.log(sglMovie)
        let id = this.state.id
        return (

=======
        let sglMovie = this.state.activeMovie;
        console.log(sglMovie);
        return (
         
               
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
            <Grid fluid>
                 <FontAwesomeIcon onClick={this.goBack} icon="arrow-alt-circle-left" className="back-logo" alt="logo" />
                <Row className="show-grid">
                <h2 className="sgl-mve-title">{sglMovie.title}</h2>
                    <Col className="cntnr-lt" sm={4}>
                       
<<<<<<< HEAD
                        <img className="sgl-movie-img" src={`https://image.tmdb.org/t/p/w500/${sglMovie.poster_path}`} alt="Movie Poster Missing"/>
                        <p>"{sglMovie.tagline}"</p>
                        <StarRating starRating={sglMovie.vote_average} />
=======
                        <img className="sgl-movie-img" src={`https://image.tmdb.org/t/p/w500/${sglMovie.poster_path}`} alt="Movie Poster"/>
                        <p>"{sglMovie.tagline}"</p>
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
                    </Col>

                    <Col className="cntnr-rt" sm={8}>
                        <Row around="xs">
<<<<<<< HEAD
                            <Col className="stats" xs={6}>
=======
                            <Col className="stats" xs={4}>
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
                                <h2 className="mve-stats-title">POPULARITY: </h2>
                                <p className="mve-stats">{sglMovie.popularity}</p>
                            </Col>

<<<<<<< HEAD
                            <Col className="stats" xs={6}>
=======
                            <Col className="stats" xs={4}>
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
                                <h2 className="mve-stats-title">VOTES: </h2>
                                <p className="mve-stats">{sglMovie.vote_count}</p>
                            </Col>

<<<<<<< HEAD
                            
                        </Row>
                        <Row>
                            <Col xs={12}>
                            <div className="movie-ovrvw">
                                <p>{sglMovie.overview}</p>
                                <hr className="divdr"></hr>
                                <VideoTrailer idNum={id}/>
                            </div>
=======
                            <Col className="stats" xs={4}>
                                <h2 className="mve-stats-title">AVG: </h2>
                                <p className="mve-stats">{sglMovie.vote_average}</p>
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
<<<<<<< HEAD
                            <a className="xtnrl-lnk" target="blank" href={sglMovie.homepage}>{sglMovie.homepage}</a>
                            <hr className="divdr"></hr>
                            <p className="run-time-txt">Runtime: {sglMovie.runtime} mins</p>
                           
                               
=======
                                <div className="movie-ovrvw">
                                    <p>{sglMovie.overview}</p>
                                    <hr className="divdr"></hr>
                                    <p className="run-time-txt">Runtime: {sglMovie.runtime} mins</p>
                                </div>
                                <a className="xtnrl-lnk" href={sglMovie.homepage}>{sglMovie.homepage}</a>
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
          
        );
    }
}

export default Movie;


