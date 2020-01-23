import React, { Component } from 'react';
<<<<<<< HEAD
import { library } from '@fortawesome/fontawesome-svg-core';
=======
import { Link, Route } from "react-router-dom";
import { Row, Col, Grid } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
import { faSpinner, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
library.add(faSpinner, faArrowAltCircleLeft)

class SimilarMovie extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            didMount: false,
            similarMovies: [],
        }
    }

    componentDidMount() {
<<<<<<< HEAD
        const { id } = this.props.location.state;
        const API_KEY = process.env.REACT_APP_API_KEY;  
        const Url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
=======
        const id  = this.props.location.state;
        const api_key = '93e2bc1e40111d08ed5b475d4fa2546f'; 
        const Url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key==${api_key}&language=en-US&page=1`
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
        fetch(Url)
        .then(response => response.json())
        .then(data => 
            this.setState({ 
                didMount: true,
                similarMovies: data
              })
        )
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SimilarMovie;
