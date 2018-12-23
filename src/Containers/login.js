import React, { Component } from 'react';
import { Header } from '../boilerplate/header';
import {googleLogin} from  '../firebase/auth';
class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        const { username, password } = this.state;
        return (
            <React.Fragment>
                <Header location={this.props.history.location}></Header>
                <div class="container login-form">
                    <div class="row">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div class=" card-signin my-5">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Sign In</h5>
                                    <form class="form-signin">
                                        <div class="form-label-group">
                                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus />
                                            <label for="inputEmail">Email address</label>
                                        </div>

                                        <div class="form-label-group">
                                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                                            <label for="inputPassword">Password</label>
                                        </div>

                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Remember password</label>
                                        </div>
                                        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                        <hr class="my-4" />
                                        <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit" onClick={googleLogin()}><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                                        <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div className="box">
                                <div className="shape1"></div>
                                <div className="shape2"></div>
                                <div className="shape3"></div>
                                <div className="shape4"></div>
                                <div className="shape5"></div>
                                <div className="shape6"></div>
                                <div className="shape7"></div>
                                <div className="float">
                                    <form className="form" >
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-white">Username:</label><br />
                                            <input type="text" value={username} onChange={(e) => this.handleChange(e)} name="username" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-white">Password:</label><br />
                                            <input type="text" value={password} onChange={(e) => this.handleChange(e)} name="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-info btn-md" >Login </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </React.Fragment>

        );
    }
}

export default Login;