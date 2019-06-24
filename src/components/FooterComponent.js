import React from 'react';
import '../css/footer-component.css';


const FooterComponent = () => {
        let date = (new Date()).getFullYear();
        return (
            <footer>
                PaulCalabrese.me &copy; {date}
            </footer>
        )
}

export default FooterComponent;