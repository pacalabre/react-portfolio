import React from 'react';
import About from '../About';
import TechnologyList from '../TechnologyList';
import WorkGallery from '../WorkGallery';
import Contact from '../Contact';

class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
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