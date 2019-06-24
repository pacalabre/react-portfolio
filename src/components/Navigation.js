import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/navigation.css';


class Navigation extends React.Component {

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
            <Navbar className="navigation" expand="lg">
                <div className="navigation-text">
                    <Link className="nav-link-home"  to="/">
                        <h1 className="navigation-h1">
                            <span className="navigation-h1-span">P</span>AUL <span className="navigation-h1-span">C</span>ALABRESE
                        </h1>
                    </Link>
                    <Navbar.Toggle children={this.getNavbarToggleIcon()}  aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                        <Link className="link-to" to="/about">about</Link>
                        <Link className="link-to" to="/#work">work</Link>
                        <Link className="link-to" to="/#contact">contact</Link>
                        <div className="mobile-social-icons">
                            <a className="social-icons-a" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pacalabre/"><span className="icon-social-linkedin nav-ul-social"></span></a>
                            <a className="social-icons-a" target="_blank" rel="noopener noreferrer" href="https://github.com/pacalabre"><span className="icon-social-github nav-ul-social"></span></a>
                        </div>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className="nav-bottom-div">
                    <p className="navigation-p">Front End Dev | Seattle, WA</p>
                    <div className="desktop-social-icons">
                        <a className="social-icons-a" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pacalabre/"><span className="icon-social-linkedin nav-ul-social"></span></a>
                        <a className="social-icons-a" target="_blank" rel="noopener noreferrer" href="https://github.com/pacalabre"><span className="icon-social-github nav-ul-social"></span></a>
                    </div>
                </div>
            </Navbar>
        )
    }
}

export default Navigation;