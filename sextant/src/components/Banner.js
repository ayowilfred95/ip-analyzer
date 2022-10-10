import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <h4>{this.props.bannerText}</h4>
                <h1>{this.props.bannerText2}</h1>
                <h2>{this.props.bannerText4}</h2>
                <h6>{this.props.bannerText3}</h6>
             </div>
        );
    }
}

export default Banner;
