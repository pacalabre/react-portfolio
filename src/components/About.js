import React from 'react';
import '../css/about.css';
import aboutVid from '../assets/about.mp4';
import aboutVidPoster from '../assets/sea.jpg';
import mtns from '../assets/mtns-lake-transparent.png';
import mtnsInside from '../assets/mtn-lake-center.png';

class About extends React.Component {
    render() {
        return (
            <section className="about-container">
                <div className="about">
                    <div className="about-p-background">
                    <img className="mtns-lake-img" src={mtns}/>
                    <img className="mtns-lake-img mnt-lake-img-inside" src={mtnsInside}/>
                        <div className="about-p">
                            <p>Design</p>
                            <p>Driven</p>
                            <span>Development</span>
                        </div>
                    </div>
                </div>
                <div className="headshot"></div>
            </section>
        )
    }
}

export default About;