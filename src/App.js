import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import { Switch, Route, withRouter } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './Containers/login';
import Home from './Containers/home';
import Dashboard from './Containers/dashboard';
import './App.css';
import Register from './Containers/register';
import ViewProduct from './Containers/view-product';
import './firebase/firebase';
import { firebase } from './firebase/firebase';
import {Loader} from './boilerplate/loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoader: true
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        localStorage.setItem('userData', JSON.stringify(user));
        this.setState({ isLoader: false });
        this.props.history.push('/dashboard')
      } else {
        this.setState({ isLoader: false });
        this.props.history.push('/login')
      }
    })
  }
  render() {
    return (
      <React.Fragment>
        {this.state.isLoader ? <Loader /> : <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Register} />
          <Route path="/view-product" component={ViewProduct} />
        </Switch>}
      </React.Fragment>

    );
  }
}
const AuthRouter = withRouter(App);


export default AuthRouter;
