import React from 'react';
import '../css/navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="nav">
                <div className="nav-text">
                    <div>
                        <h1 className="nav-h1">PAUL CALABRESE</h1>
                    </div>
                    <ul className="navbar-ul">
                        <li className="navbar-ul-li">ABOUT</li>
                        <li className="navbar-ul-li">WORK</li>
                        <li className="navbar-ul-li">CONTACT</li>
                    </ul>
                </div>
                <p className="nav-p">Front End Dev | Seattle, WA</p>
                
                
            </nav>
        )
    }
}

export default Navbar;