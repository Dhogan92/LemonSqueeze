import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
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
        const { id } = this.props.location.state;
        const API_KEY = process.env.REACT_APP_API_KEY;  
        const Url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
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
