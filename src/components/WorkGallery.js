import React from 'react';
import { Link } from 'react-router-dom';
import '../css/work-gallery.css';
import placeholder from '../assets/placeholder.jpg';



class WorkGallery extends React.Component {

    render() {
        return (
            <section className="work-section">
                <h2 className="work-title">WORK</h2>
                <div className="work-gallery">
                    {Object.keys(this.props.posts).map(key => 
                        <div className="work-gallery-div" key={key}>
                            <Link to={{
                                pathname: this.props.posts[key].slug ,
                                state: {
                                    post: this.props.posts[key]
                                }
                            }}>
                                <div className="work-gallery-img-div">
                                    <img alt="project image" className="work-gallery-img" src={this.props.posts[key].jetpack_featured_media_url} />
                                </div>
                                <div className="work-gallery-project-text">
                                    <h3 className="work-gallery-project-name" dangerouslySetInnerHTML= {{ __html: this.props.posts[key]['_embedded']['wp:term'][1][0].name }}></h3>
                                </div>
                            </Link>
                        </div>    
                    )}
                </div>
            </section>
        )
    }
}

export default WorkGallery;