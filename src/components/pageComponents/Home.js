import React from 'react';
import HomeNavigation from '../HomeNavigation';
import About from '../About';
import TechnologyList from '../TechnologyList';
import WorkGallery from '../WorkGallery';
import Contact from '../Contact';
import KaleidoscropeMountain from '../KaleidoscopeMountain';

class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div>
                <HomeNavigation  />
                <About />
                <KaleidoscropeMountain />
                <div className="white-backdrop">
                    <WorkGallery posts={this.props.posts} isLoadingPosts={this.props.isLoadingPosts} />
                    <TechnologyList />
                    <Contact />
                </div>
            </div>
        )
    }
}

export default Home;