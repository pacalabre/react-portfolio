import React from 'react';
import '../../css/not-found.css';


class NotFound extends React.Component {
    render() {
        return (
            <div>
                <p className="four-oh-four-err">404 - Page not found!</p>
                <p className="four-oh-four-text">But if you want to hear a hip hop beat that I made a couple of years ago, check it out below!</p>
                <iframe class="iframe-404" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/98030701&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </div>
        )
    }
}

export default NotFound;