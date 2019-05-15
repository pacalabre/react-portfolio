import React from 'react';
import { Route } from 'react-router-dom';
import '../../css/individual-project.css';
import NotFound from './NotFound';


class IndividualProject extends React.Component {
    constructor(props) {
        // possibly temp creation of a ref, looking for a way to dynamically style and label links
        super(props);
        this.description = React.createRef();

        const node =  this.description;

      }

    render() {
        if(!this.props.location.state) {
            return <Route component={ NotFound }/>
        }
        return (
            <main>
                <section className="project-img-and-title-section">
                    <img className="project-img" src={this.props.location.state.post.jetpack_featured_media_url }/>
                    <p ref={this.description} dangerouslySetInnerHTML={{ __html: this.props.location.state.post.excerpt.rendered }}></p>
                </section>
                <section className="project-img-section">
                    <p dangerouslySetInnerHTML={{ __html: this.props.location.state.post.content.rendered }}></p>
                </section>
            </main>
        )
    }
}

export default IndividualProject;