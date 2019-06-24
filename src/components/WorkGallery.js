import React from 'react';
import { Link } from 'react-router-dom';
import xss from 'xss';
import '../css/work-gallery.css';




class WorkGallery extends React.Component {

    render() {
        if(this.props.posts === 0) {
            return 
        }
        return (
            <section className="work-section" id="work">
                <h2 className="work-title">WORK</h2>
                <div className="work-gallery">
                    <div className={`${this.props.isLoadingPosts ? 'loader-circle' : 'hide'} `}></div>
                    {Object.keys(this.props.posts).map(key => 
                        <div className="work-gallery-div" key={key}>
                            <Link to={{
                                pathname: this.props.posts[key].slug ,
                                state: {
                                    post: this.props.posts[key]
                                }
                            }}>
                                <div className="work-gallery-img-div">
                                    <img alt="project logo" className="work-gallery-img" src={this.props.posts[key].jetpack_featured_media_url} />
                                </div>
                                <div className="work-gallery-project-text">
                                    <h3 className="work-gallery-project-name" dangerouslySetInnerHTML= {{ __html: xss(this.props.posts[key]['_embedded']['wp:term'][1][0].name)}}></h3>
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