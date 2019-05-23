import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../../css/individual-project.css';
import NotFound from './NotFound';


class IndividualProject extends React.Component {

    render() {
        if(!this.props.location.state) {
            return <Route component={ NotFound }/>
        }


        return (
            <main>
                <div className="breadcrumbs">
                <Link to="/">home</Link> / <Link to="/:projectID">work</Link> / <span>{this.props.location.state.post.title.rendered}</span>
                </div>
                <div className="project-post-content">
                <section className="project-img-and-title-section">
                    <div className="fixed-container">
                        <img className="project-img" src={this.props.location.state.post.jetpack_featured_media_url }/>
                        <p dangerouslySetInnerHTML={{ __html: this.props.location.state.post.excerpt.rendered }}></p>
                        <div className="tech-list">
                            <i class="devicon-html5-plain-wordmark colored dev-icon"></i>
                            <i class="devicon-css3-plain-wordmark colored dev-icon"></i>
                            {
                                this.props.location.state.post['_embedded']['wp:term'][0].map(tagName =>
                                    <i key={tagName.id} 
                                        className={"devicon-"+`${tagName.name === `angularjs` || tagName.name === `javascript` ?  tagName.name+"-plain" : tagName.name+"-plain-wordmark"}`+" dev-icon colored"}>
                                    </i>
                                )
                            }
                        </div>
                    </div>
                </section>
                    <section className="project-img-section">
                        <p dangerouslySetInnerHTML={{ __html: this.props.location.state.post.content.rendered }}></p>
                    </section>
                </div>
            </main>
        )
    }
}

export default IndividualProject;