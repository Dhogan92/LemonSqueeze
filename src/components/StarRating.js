import React, { Component } from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


export class Rating extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            starRating: this.props
        }
    }

    render() {
        let avgStarRating = this.state.starRating.starRating
        console.log(avgStarRating)
        return (
            <div>
                <Rater id="starRating" total={10} rating={avgStarRating} interactive={false} />
            </div>
        );
    }
}

export default Rating;
