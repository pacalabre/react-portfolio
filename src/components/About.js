import React from 'react';
import '../css/about.css';
import headshot from  '../assets/placeholder.jpg';
import aboutVid from '../assets/about.mp4';
import Headshot from './Headshot';

class About extends React.Component {
    render() {
        return (
            <section className="about-container">
                <div className="about">
                    <div className="about-p-background">
                        <p className="about-p">I am a <span>front end</span> developer with a passion for building clean, beautiful, 
                        responsive, and maintainable websites and <span>web apps</span>. I currently work for Avanade 
                        in <span>Seattle</span> where I get to collaborate on projects with some of the <span>biggest</span> and
                        best companies in the city. When I am not <span>coding</span> or listening to podcasts about
                        coding you can find me making instrumental hip hop and searching for deep
                        powder in the mountains.
                        </p>
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