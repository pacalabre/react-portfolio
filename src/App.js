import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import FooterComponent from './components/FooterComponent';
import Home from './components/pageComponents/Home';
import  Bio from './components/pageComponents/Bio';
import IndividualProject from './components/pageComponents/individualProject';
import NotFound from './components/pageComponents/NotFound';
import axios from 'axios';


class App extends Component {
  state = {
    posts:{},
    about:{},
    isLoadingData: true
  }

  getPosts = post => {
    var self = this;
    axios.get('https://public-api.wordpress.com/wp/v2/sites/paulcalabrese.wordpress.com/posts?_embed', {
      params: {
          per_page: '100'
      }
    })
    .then(function(response) {
      // Filter out the About page post from
      for (post in response.data) {
        const aboutPost = response.data[post]['_embedded']['wp:term'][1][0].name.toLowerCase() === "about";
        if( aboutPost ) { 
          self.setState({
            about: response.data[post] 
          })
          response.data.splice(response.data.indexOf(response.data[post]), 1);
        } 
        
        self.setState({
          posts: response.data,
          isLoadingData: false
        })
      }
    })
    .catch(function(err) {
      console.log(err);
    })
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <React.Fragment>
        <Navigation  />
        <Switch>
          <Route path="/work/:project" render = {(props)=>  <IndividualProject posts={this.state.posts} {...props}  /> } />
          <Route path="/about" render = {()=>  <Bio  about={this.state.about} /> } />
          <Route path="/" render = {()=>  <Home posts={ this.state.posts } about={this.state.about} isLoadingPosts={this.state.isLoadingData} /> } />
          <Route component = { NotFound } />
        </Switch>
        <FooterComponent />
      </React.Fragment>
    )
  }
}

export default App;
