
import React from 'react';
import { Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import xss from 'xss';
import '../../css/individual-project.css';
import NotFound from './NotFound';


class IndividualProject extends React.Component {

    state = {
        currentPost: {}
    }

    lookForCurrentPost() {
        if(Object.entries(this.state.currentPost).length === 0) {
            for(let post in this.props.posts) {
                console.log(this.props.posts[post]);
                if(this.props.posts[post].slug === this.props.match.params.project) {
                    this.setState( {
                        currentPost: this.props.posts[post]
                    })
                }
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
        console.log(Object.entries(this.state.currentPost).length);
    }

    render() {
        if(!this.state.currentPost.slug) {
            return <div className="loader-circle"></div>
        }

        return (
            <main>
                <div className="breadcrumbs">
                <Link to="/">home</Link> / <Link to="/#work">work</Link> / <span>{this.state.currentPost.title.rendered}</span>
                </div>
                <div className="project-post-content">
                <section className="project-img-and-title-section">
                    <div className="fixed-container">
                        <img alt="company logo" className="project-img" src={this.state.currentPost.jetpack_featured_media_url }/>
                        <p dangerouslySetInnerHTML={{ __html: xss(this.state.currentPost.excerpt.rendered)}}></p>
                        <div className="tech-list">
                            <i className="devicon-html5-plain-wordmark colored dev-icon"></i>
                            <i className="devicon-css3-plain-wordmark colored dev-icon"></i>
                            {
                                this.state.currentPost['_embedded']['wp:term'][0].map(tagName =>
                                    <i key={tagName.id} 
                                        className={"devicon-"+`${tagName.name === `angularjs` || tagName.name === `javascript` ?  tagName.name+"-plain" : tagName.name+"-plain-wordmark"}`+" dev-icon colored"}>
                                    </i>
                                )
                            }
                        </div>
                    </div>
                </section>
                    <section className="project-img-section">
                        <p dangerouslySetInnerHTML={{ __html: xss(this.state.currentPost.content.rendered)}}></p>
                    </section>
                </div>
            </main>
        )
    }
}

export default IndividualProject;