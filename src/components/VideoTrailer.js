import React, { Component } from 'react';
import Iframe from 'react-iframe';

class VideoTrailer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            didMount: false,
            activeMovie: [],
            idNum: this.props.idNum,
            keyName:'',
        }
    }
    

    componentDidMount() {
        const id  = this.props.idNum;
        const API_KEY = process.env.REACT_APP_API_KEY;  
        const Url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US` 
        fetch(Url)
        .then(response => response.json())
        .then(data =>
            this.setState({ 
                didMount: true,
                activeMovie: data,
                keyName: data.results[0].key
                
              })
        )
        
    }
    render() {
        let YouTubeKeyName =`https://www.youtube.com/embed/${this.state.keyName}`

        return (
            <div>
                <Iframe url={YouTubeKeyName}
        width="100%"
        height="360px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
            </div>
        );
    }
}

export default VideoTrailer;

