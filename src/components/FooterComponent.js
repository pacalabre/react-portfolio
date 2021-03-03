import React from 'react';
import '../css/footer-component.css';
import mtns from '../assets/mtns-lake-transparent.png';


const FooterComponent = () => {
        let date = (new Date()).getFullYear();
        return (
            <footer className="footer">
                <span className="footer-span">PaulCalabrese.me &copy; {date}</span>
                <img className="footer-img" alt="kaleidoscope of mountains" src={mtns}/>
            </footer>
        )
}

export default FooterComponent;