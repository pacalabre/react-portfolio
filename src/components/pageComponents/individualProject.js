import React from 'react';
import { Route } from 'react-router-dom';
import NotFound from './NotFound';


class IndividualProject extends React.Component {
    render() {
        if(!this.props.location.state) {
            return <Route component={ NotFound }/>
        }
        return (
            <div>
                <p dangerouslySetInnerHTML={{__html: this.props.location.state.post.slug}}></p>
            </div>
        )
    }
}

export default IndividualProject;