import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About';
import Nav from '../Nav';
import Headshot from '../Headshot';
import TechnologyList from '../TechnologyList';

class Home extends React.Component {
    render() {
        return (
            <div>
                <About />
                <TechnologyList />
                <p>Projects</p>
                <ul className="ul">
                    {/* {Object.keys(this.props.posts).map(key => 
                        <li className="li" key={ key }>
                            <Link to={ this.props.posts[key].slug }>
                                <img src={this.props.posts[key]['_embedded']['wp:featuredmedia'][0].source_url} />
                            </Link>
                        </li>    
                    )} */}
                </ul>
            </div>
        )
    }
}

export default Home;