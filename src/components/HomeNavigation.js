import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../css/home-navigation.css';


class HomeNavigation extends React.Component {

    getNavbarToggleIcon() {
        return (
            <div className="toggle-icon-wrapper">
                <span className="toggle-icon-line toggle-line-top"></span>
                <span className="toggle-icon-line toggle-line-middle"></span>
                <span className="toggle-icon-line toggle-line-bottom"></span>
            </div>
        )
    }
    
    render() {
        return (
            <Navbar className="home-navigation" expand="lg">
                <div className="home-navigation-text">
                    <Link className="home-nav-link-home"  to="/">
                        <img className="home-nav-logo" alt="logo" src={logo} />
                    </Link>
                    <Navbar.Toggle children={this.getNavbarToggleIcon()}  aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="home-navbar-nav">
                        <div className="home-nav-link-container">
                            <Link className="home-nav-link-to link-to" to="/about">about</Link>
                            <Link className="home-nav-link-to link-to" to="/#work">work</Link>
                            <Link className="home-nav-link-to link-to" to="/#contact">contact</Link>
                        </div> 
                        <div className="home-nav-social-icons">
                            <a className="social-icons-a" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pacalabre/"><span className="icon-social-linkedin nav-ul-social"></span></a>
                            <a className="social-icons-a" target="_blank" rel="noopener noreferrer" href="https://github.com/pacalabre"><span className="icon-social-github nav-ul-social"></span></a>
                        </div>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}

export default HomeNavigation;