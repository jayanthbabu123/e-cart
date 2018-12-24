import React, { Component } from 'react';
import { Header } from '../boilerplate/header';
import { googleLogin } from '../firebase/auth';
import { firebase } from '../firebase/firebase';
class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: [],
        loading: false
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isFormValid(this.state)) {
            this.setState({ errors: [], loading: true });
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((signInUser) => {
                console.log(signInUser);
                localStorage.setItem('userData', JSON.stringify(signInUser));
                this.setState({
                    loading: false
                })
            }).catch(err => {
                this.setState({
                    errors: this.state.errors.concat(err),
                    loading: false
                })
            })
        }
    }
    handleInputError = (errors, inputName) => {
        return errors.some(
            error => error.message && error.message.toLowerCase().includes(inputName)) ?
            'error' : ''
    }
    dispalyErrors = errors => errors.map((error, i) => <p key={i}> {error.message}</p>)

    isFormValid = ({ email, password }) => email && password;
    render() {
        const { email, password } = this.state;
        return (
            <React.Fragment>
                <Header location={this.props.history.location}></Header>
                <div class="container login-form">
                    <div class="row">
                        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div class=" card-signin my-5">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Sign In</h5>
                                    <form class="form-signin" onSubmit={this.handleSubmit}>
                                        <div class="form-label-group">
                                            <input className={this.handleInputError(this.state.errors, 'email')}
                                                onChange={this.handleChange}
                                                type="email" id="inputEmail" class="form-control"
                                                name="email" value={email} placeholder="Email address" required />
                                            <label for="inputEmail">Email address</label>
                                        </div>

                                        <div class="form-label-group">
                                            <input className={this.handleInputError(this.state.errors, 'password')}
                                                onChange={this.handleChange}
                                                type="password" id="inputPassword" class="form-control" name="password"
                                                value={password} placeholder="Password" required />
                                            <label for="inputPassword">Password</label>
                                        </div>

                                        <div class="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Remember password</label>
                                        </div>
                                        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                        {this.state.errors.length ?
                                            <div className="alert alert-danger">{this.dispalyErrors(this.state.errors)}</div> : ''}
                                        <hr class="my-4" />
                                        <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit" onClick={googleLogin()}><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                                        <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
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