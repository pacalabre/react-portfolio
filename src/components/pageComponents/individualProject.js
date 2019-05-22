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
                        <img className="project-img" src={this.props.location.state.post.jetpack_featured_media_url }/>
                        <p dangerouslySetInnerHTML={{ __html: this.props.location.state.post.excerpt.rendered }}></p>
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