import React from 'react';


class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>This is the home page!</h2>

                <p>Projects</p>
                {
                    Object.keys(this.props.posts).map(key => 
                        <p key={ key }>{ this.props.posts[key].title.rendered }</p>    
                    )
                }
            </div>
        )
    }
}

export default Home;