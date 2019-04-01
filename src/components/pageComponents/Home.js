import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About';
import Headshot from '../Headshot';
import TechnologyList from '../TechnologyList';
import WorkGallery from '../WorkGallery';

class Home extends React.Component {
    render() {
        return (
            <div>
                <About />
                <WorkGallery posts={this.props.posts} />
                <TechnologyList />
            </div>
        )
    }
}

export default Home;