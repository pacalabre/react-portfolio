import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import FooterComponent from './components/FooterComponent';
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
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route path="/:project" component={withRouter(IndividualProject)} /> 
          <Route path="/" render = {()=>  <Home posts={ this.state.posts } /> } />
          <Route component = { NotFound } />
        </Switch>
        <FooterComponent />
      </React.Fragment>
    )
  }
}

export default App;
