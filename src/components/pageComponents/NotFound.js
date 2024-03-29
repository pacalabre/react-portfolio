import React from 'react';
import '../../css/not-found.css';


class NotFound extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <p className="four-oh-four-err">404 - Page not found!</p>
                <p className="four-oh-four-text">But if you want to hear a hip hop beat that I made, check it out below!</p>
                <iframe className="iframe-404" scrolling="no" frameBorder="no" allow="autoplay" title="A hip hop beat I made" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/98030701&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
        )
    }
}

export default NotFound;