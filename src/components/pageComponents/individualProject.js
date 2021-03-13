
import React from 'react';
import Navigation from '../Navigation';
import { Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import xss from 'xss';
import '../../css/individual-project.css';
import NotFound from './NotFound';


class IndividualProject extends React.Component {

    state = {
        currentPost: {},
        notFound: false
    }

    lookForCurrentPost() {
        if(Object.entries(this.state.currentPost).length === 0) {
            let notFoundCount = 0;
            for(let post in this.props.posts) {
                if(this.props.posts[post].slug === this.props.match.params.project) {
                    this.setState({
                        currentPost: this.props.posts[post]
                    })
                } else {
                    notFoundCount++;
                }
            }
            if(this.state.notFound === false && notFoundCount > 0 && notFoundCount === this.props.posts.length) {
                this.setState({
                    notFound: true
                })
            }   
        }   
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.lookForCurrentPost();
    }       

    componentDidUpdate() {
        this.lookForCurrentPost();
    }

    componentWillUnmount() {
        this.setState({
            currentPost: {}
        })
    }

    render() {

        if(this.state.notFound === true) {
            return <NotFound />
        }

        if(!this.state.currentPost.slug) {
            return (
                <div className="loading-container">
                    <div className="loader-circle"></div>
                </div>)
        }

        return (
            <div className="individual-project">
                <Navigation  />
                <main className="individual-project-main">
                    <div className="breadcrumbs">
                    <Link to="/">home</Link> <span className="breadcrumb-divider">/</span> <Link to="/#work">work</Link><span className="breadcrumb-divider"> /</span> <span>{this.state.currentPost.title.rendered}</span>
                    </div>
                    <div className="project-post-content">
                    <section className="project-img-and-title-section">
                        <div>
                            <img alt="company logo" className="project-img" src={this.state.currentPost.jetpack_featured_media_url }/>
                            <div className="tech-list">
                                <i className="devicon-html5-plain-wordmark dev-icon"></i>
                                <i className="devicon-css3-plain-wordmark dev-icon"></i>
                                {
                                    this.state.currentPost['_embedded']['wp:term'][0].map(tagName =>
                                        <i key={tagName.id} 
                                            className={"devicon-"+`${tagName.name === `angularjs` || tagName.name === `javascript` ?  tagName.name+"-plain" : tagName.name+"-plain-wordmark"}`+" dev-icon"}>
                                        </i>
                                    )
                                }
                            </div>
                        </div>
                    </section>
                        <section className="project-img-section" >
                            <p dangerouslySetInnerHTML={{ __html: xss(this.state.currentPost.content.rendered)}}></p>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}

export default IndividualProject;