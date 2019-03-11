import React from 'react';
import { Link } from 'react-router-dom';


class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>This is the home page!</h2>

                <p>Projects</p>
                <ul>
                    {Object.keys(this.props.posts).map(key => 
                        <li key={ key }>
                            <Link to={ this.props.posts[key].slug }>
                                { this.props.posts[key].title.rendered }
                            </Link>
                        </li>    
                    )}
                </ul>
            </div>
        )
    }
}

export default Home;