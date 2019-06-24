import React from 'react';
import { Route } from 'react-router-dom';
import xss from 'xss';
import Contact from '../Contact';
import '../../css/bio.css';

class About extends React.Component {
    render() {
        if(!this.props.about.content) {
            return (
                <div className="loader-circle"></div>
            )
        }
        return (
            <React.Fragment>
                <section className="bio-section">
                    <div className="bio-image-div">
                        <img src={this.props.about.jetpack_featured_media_url}></img>
                    </div>
                    <div className="bio-post-content" dangerouslySetInnerHTML={{ __html: xss(this.props.about.content.rendered)}}></div>
                </section>
                <Contact />
            </React.Fragment>
        )
    }
}

export default About;
