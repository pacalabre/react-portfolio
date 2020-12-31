import React from 'react';
import '../css/about.css';
import aboutVid from '../assets/about.mp4';
import aboutVidPoster from '../assets/sea.jpg';
import seattleView from '../assets/sea1.jpg';
import mtns from '../assets/mtns-lake-transparent.png';
import mtnsInside from '../assets/mtn-lake-center.png';

class About extends React.Component {
    render() {
        return (
            <div>
                <section className="hero-container">
                    <div className="seattle"></div>
                    <div className="headshot"></div>
                </section>
            </div>
        )
    }
}

export default About;