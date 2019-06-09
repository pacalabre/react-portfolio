import React from 'react';
import '../css/footer-component.css';


class FooterComponent extends React.Component {

    render() {
        let date = new Date;
        return (
            <footer>
                PaulCalabrese.me &copy; {date.getFullYear()}
            </footer>
        )
    }
}

export default FooterComponent;