import React from 'react';
import { Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import xss from 'xss';

class About extends React.Component {
    render() {
        return (
            <div>
               <div dangerouslySetInnerHTML={{ __html: xss(this.props.about.content.rendered)}}></div>
            </div>
        )
    }
}

export default About;
