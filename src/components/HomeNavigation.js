import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../css/home-navigation.css';


class HomeNavigation extends React.Component {

    getNavbarToggleIcon() {
        return (
            <div className="toggle-icon-wrapper home-nav-toggler">
                <span className="toggle-icon-line toggle-line-top"></span>
                <span className="toggle-icon-line toggle-line-middle"></span>
                <span className="toggle-icon-line toggle-line-bottom"></span>
            </div>
        )
    }
    
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="home-navigation">
                <Navbar.Brand className="home-navigation-text">
                <Link className="home-nav-link-home"  to="/">
                    <svg className="home-nav-logo" width="312px" height="285px" viewBox="0 0 312 285" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>PAUL CALA BRESE</title>
                        <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="CooperHewitt-Semibold, Cooper Hewitt" font-size="105" font-weight="800" letter-spacing="23.01" line-spacing="98">
                            <g id="Assets-Page" transform="translate(-589.000000, -274.000000)">
                                <text id="PAUL-CALA-BRESE">
                                    <tspan x="585" y="338" fill="#595959">PAU</tspan>
                                    <tspan x="848.175" y="338" fill="#595959">L</tspan>
                                    <tspan x="927.03" y="341.43" letter-spacing="1.90909091" fill="#595959"></tspan>
                                    <tspan x="585" y="438" letter-spacing="21.609091" fill="#4D84CB">CAL</tspan>
                                    <tspan x="835.677273" y="438" fill="#4D84CB">A</tspan>
                                    <tspan x="927.132273" y="441.43" letter-spacing="1.90909091" fill="#4D84CB"></tspan>
                                    <tspan x="585" y="538" letter-spacing="1.609091" fill="#4D84CB">BRES</tspan>
                                    <tspan x="844.906364" y="538" letter-spacing="-4.8" fill="#4D84CB">E</tspan>
                                </text>
                            </g>
                        </g>
                    </svg>
                    <span className="logo-text">UI Developer & Designer</span>
                </Link>
                </Navbar.Brand>
                <Navbar.Toggle children={this.getNavbarToggleIcon()} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="home-navbar-nav">
                        <div class="home-navbar-link-container">
                            <Link className="home-nav-link-to link-to" to="/about">ABOUT</Link>
                            <Nav.Link className="home-nav-link-to link-to" href="/#work">WORK</Nav.Link>
                            <Nav.Link className="home-nav-link-to link-to" href="/#contact">CONTACT</Nav.Link>
                        </div>
                        <div className="home-nav-social-icons">
                            <a className="social-icons-a" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pacalabre/"><span className="icon-social-linkedin nav-ul-social"></span></a>
                            <a className="social-icons-a" target="_blank" rel="noopener noreferrer" href="https://github.com/pacalabre"><span className="icon-social-github nav-ul-social"></span></a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default HomeNavigation;