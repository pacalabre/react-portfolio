import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pageComponents/Home';
import IndividualProject from './components/pageComponents/individualProject';
import NotFound from './components/pageComponents/NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/:project" render={()=> <IndividualProject />} /> 
        <Route path="/" render = {()=>  <Home /> } />
        <Route component = { NotFound } />
      </Switch>
    )
  }
}

export default App;
