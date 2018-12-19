import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/login';
import Home from './components/home';
import Dashboard from './components/dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
