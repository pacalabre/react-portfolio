import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About';
import Headshot from '../Headshot';
import TechnologyList from '../TechnologyList';
import WorkGallery from '../WorkGallery';
import Contact from '../Contact';

class Home extends React.Component {
    render() {
        return (
            <div>
                <About />
                <WorkGallery posts={this.props.posts} isLoadingPosts={this.props.isLoadingPosts} />
                <TechnologyList />
                <Contact />
            </div>
        )
    }
}

export default Home;