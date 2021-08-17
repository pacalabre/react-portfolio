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
                    <span className="logo-text">Front End Developer</span>
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
                            <a className="social-icons-a" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pacalabre/">
                                <span className="nav-ul-social">
                                    <svg width="181px" height="179px" viewBox="0 0 181 179" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <title>Linkedin Icon</title>
                                        <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Icons-Page" transform="translate(-88.000000, -149.000000)" fill="#585858">
                                                <g id="Linkdin-Icon" transform="translate(88.000000, 149.000000)">
                                                    <g id="Group-3" transform="translate(19.000000, 20.000000)">
                                                        <g id="Group">
                                                            <polygon id="Path" points="2 47.5293907 31.9128491 47.5293907 31.9128491 138.296987 2 138.296987"></polygon>
                                                            <circle id="Oval" cx="17" cy="17" r="17"></circle>
                                                        </g>
                                                        <path d="M53.0317517,47.5293907 L53.0317517,138.296987 L83,138.296987 C83,105.035563 83,85.8029022 83,80.5990051 C83,72.7931594 91.7341793,69.0431554 98.2402048,68.804402 C103.86866,68.5978531 112.5,72.1293265 112.5,80.5990051 C112.5,86.2454574 112.5,105.478118 112.5,138.296987 L142.480021,138.296987 C142.662433,107.515631 142.662433,88.2829705 142.480021,80.5990051 C142.368149,75.8864628 142.35115,70.2096154 134.665469,58.6406582 C129.931528,51.5148404 119.881389,45.8459688 109.630459,45.384127 C103.238727,45.0961562 95.4812795,48.4043547 92.8330153,49.8280027 C90.3164945,51.1808283 87.0388227,53.6602089 83,57.2661443 L83,47.5293907 L53.0317517,47.5293907 Z" id="Path-2"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span></a>
                            <a className="social-icons-a" target="_blank" rel="noopener noreferrer" href="https://github.com/pacalabre">
                                <span className="nav-ul-social">         
                                    <svg width="115px" height="133px" viewBox="0 0 115 133" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <title>Github Icon</title>
                                        <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Icons-Page" transform="translate(-382.000000, -172.000000)" fill="#585858">
                                                <g id="Github-Icon" transform="translate(382.000000, 172.000000)">
                                                    <path d="M17.3396094,23.8376718 C16.2467043,17.0710681 15.797332,12.3326604 15.9914924,9.62244857 C16.1856529,6.91223675 17.2036027,3.71408602 19.0453421,0.0279963599 C22.6471008,-0.0187585158 25.7966254,0.546159233 28.493916,1.72274961 C31.1912067,2.89933998 35.3733263,5.53257297 41.0402748,9.62244857 L17.3396094,23.8376718 Z" id="Path-4"></path>
                                                    <path d="M81.326902,9.37697991 C87.365527,5.33115792 91.7950185,2.72380501 94.6153763,1.5549212 C97.4357341,0.38603738 100.8223,-0.123831025 104.775074,0.0253159819 C106.379105,3.2430918 107.310527,6.36031311 107.569339,9.37697991 C107.828151,12.3936467 107.371198,17.2138773 106.198479,23.8376718 L81.326902,9.37697991 Z" id="Path-5"></path>
                                                    <path d="M61.8256125,87.3412767 C76.5073326,87.3412767 92.4342923,85.5003675 101.962003,78.0064804 C111.250582,70.7006795 114.325612,57.8829107 114.325612,46.8412767 C114.325612,40.2001683 113.214379,33.2230874 109.541748,27.6924083 C100.844803,14.5955276 82.2117177,6.34127669 61.8256125,6.34127669 C41.0455114,6.34127669 22.0974908,14.181393 13.5884773,27.6924083 C10.2246701,33.0336211 9.32561248,40.504108 9.32561248,46.8412767 C9.32561248,57.8580319 12.5039959,70.7049924 21.7556251,78.0064804 C31.2877585,85.5293455 47.1116421,87.3412767 61.8256125,87.3412767 Z" id="Oval"></path>
                                                    <path d="M46.7865754,86.0060078 C45.3574103,87.8740502 44.2597174,89.5440119 43.4934966,91.0158928 C42.7272759,92.4877737 41.9095353,95.0015334 41.0402748,98.557172 L24.4621877,98.557172 C21.7263968,98.0063079 19.7882826,96.3883226 18.6478451,93.703216 C16.937189,89.6755561 11.7409896,85.6605138 9.32561248,84.0229855 C4.43108665,80.7046943 -3.01568066,80.7046943 1.29041726,84.0229855 C5.59651518,87.3412767 5.64052352,87.7145969 9.32561248,92.6483858 C10.8408973,94.677128 12.7189224,98.5222967 14.3332398,102.889246 C15.9475573,107.256195 16.4513877,107.887726 21.5035547,111.402953 C24.871666,113.746438 31.383906,113.746438 41.0402748,111.402953 L41.0402748,128.065221 C38.4115997,130.763249 37.5639262,132.112263 38.4972542,132.112263 C39.8972462,132.112263 84.0394228,132.290851 86.0341489,132.112263 C88.0647328,131.930465 87.4897995,130.581451 84.309349,128.065221 L82.9386326,98.557172 C82.6073416,95.0292654 82.0700981,92.5155056 81.326902,91.0158928 C80.5837058,89.51628 78.9096382,87.8463183 76.304699,86.0060078 L46.7865754,86.0060078 Z" id="Path-6"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default HomeNavigation;