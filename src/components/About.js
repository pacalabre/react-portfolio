import React from 'react';
import '../css/about.css';
import headshot from  '../assets/selfheadshot.jpg';
import aboutVid from '../assets/about.mp4';
import Headshot from './Headshot';

class About extends React.Component {
    render() {
        return (
            <section className="about-container">
                <div className="about">
                    <div className="about-p-background">
                        <div className="about-p">
                            <p>Design</p>
                            <p>Driven</p>
                            <span>Development</span>
                        </div>
                        <video muted autoPlay loop className="about-video">
                            <source src={ aboutVid } type="video/mp4" />
                            <source src={ aboutVid } type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="headshot"></div>
            </section>
        )
    }
}

export default About;