import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/navigation.css';
import IndividualProject from './pageComponents/individualProject';
import NotFound from './pageComponents/NotFound';

class Navigation extends React.Component {
    render() {
        return (
            // <nav className="navigation">
            //     <div className="navigation-text">
            //         <div>
            //             <h1 className="navigation-h1">PAUL CALABRESE</h1>
            //         </div>
            //         <ul className="navigation-ul">
            //             <li className="navigation-ul-li">ABOUT</li>
            //             <li className="navigation-ul-li">WORK</li>
            //             <li className="navigation-ul-li">CONTACT</li>
            //         </ul>
            //     </div>
            //     <p className="navigation-p">Front End Dev | Seattle, WA</p>
            // </nav>
            <Navbar className="navigation" expand="lg">
                <div className="navigation-text">
                    <Navbar.Brand href="#home">
                        <h1 className="navigation-h1">PAUL CALABRESE</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                        <Link className="link-to" to="/">about</Link>
                        <Link className="link-to" to="/:projectID">work</Link>
                        <Link className="link-to" to="/notfound">contact</Link>
                        <div className="mobile-social-icons">
                            <a className="social-icons-a" href="#"><span className="icon-social-linkedin nav-ul-social"></span></a>
                            <a className="social-icons-a" href="#"><span className="icon-social-github nav-ul-social"></span></a>
                        </div>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className="nav-bottom-div">
                    <p className="navigation-p">Front End Dev | Seattle, WA</p>
                    <div className="desktop-social-icons">
                        <a className="social-icons-a"><span className="icon-social-linkedin nav-ul-social"></span></a>
                        <a className="social-icons-a"><span className="icon-social-github nav-ul-social"></span></a>
                    </div>
                </div>
            </Navbar>
        )
    }
}

export default Navigation;