import React from 'react';
import { Route } from 'react-router-dom';
import xss from 'xss';

class About extends React.Component {
    render() {
        if(!this.props.about.content) {
            return (
                <div className="loader-circle"></div>
            )
        }
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: xss(this.props.about.content.rendered)}}></div>
            </div>
        )
    }
}

export default About;
