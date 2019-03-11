import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pageComponents/Home';
import IndividualProject from './components/pageComponents/individualProject';
import NotFound from './components/pageComponents/NotFound';
import axios from 'axios';

class App extends Component {
  state = {
    posts:{}
  }

  getPosts = post => {
    var self = this;
    axios.get('https://public-api.wordpress.com/wp/v2/sites/paulcalabrese.wordpress.com/posts?_embed', {
      params: {
          per_page: '100'
      }
    })
    .then(function(response) {
      self.setState({
        posts: response.data
      })
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
      <Switch>
        <Route path="/:project" render={()=> <IndividualProject />} /> 
        <Route path="/" render = {()=>  <Home posts={ this.state.posts } /> } />
        <Route component = { NotFound } />
      </Switch>
    )
  }
}

export default App;
