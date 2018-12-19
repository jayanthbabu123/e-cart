import React, { Component } from 'react';
import { Header } from '../boilerplate/header';

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
                <Header></Header>
                <div className="container">
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
                </div>
            </React.Fragment>

        );
    }
}

export default Login;