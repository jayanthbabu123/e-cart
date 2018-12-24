import React, { Component } from 'react';
import { Header } from '../boilerplate/header';
import { firebase } from '../firebase/firebase';
import md5 from 'md5';
export default class Register extends Component {
    state = {
        first_name: '',
        last_name: '',
        password: '',
        email: '',
        phone: '',
        errors: [],
        loading: false,
        userRef: firebase.database().ref('users')
    }
    isFormEmpty = ({ first_name, last_name, password, email, phone }) => {
        return !first_name.length || !last_name.length || !password.length ||
            !email.length || !phone.length;

    }
    isPasswordValid = ({ password }) => {
        return password.length < 6 ? false : true
    }
    isFormValid = () => {
        let errors = [];
        let error;
        if (this.isFormEmpty(this.state)) {
            error = { message: 'Fill all the details' }
            this.setState({ errors: errors.concat(error) });
            return false;
        } else if (!this.isPasswordValid(this.state)) {
            error = { message: 'Password must have minimum 6 charcters' };
            this.setState({ errors: errors.concat(error) });
            return false;
        } else {
            //if form valid
            return true;
        }
    }
    handleInputError = (errors, inputName) => {
        return errors.some(
            error => error.message && error.message.toLowerCase().includes(inputName)) ?
            'error input--style-4' : 'input--style-4'
    }
    dispalyErrors = errors => errors.map((error, i) => <p className="m-0" key={i}> {error.message}</p>)
    handleSubmit = event => {
        event.preventDefault();
        if (this.isFormValid()) {
            this.setState({ errors: [], loading: true })
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((createdUser) => {
                    createdUser.user.updateProfile({
                        displayName: this.state.first_name + ' ' + this.state.last_name,
                        photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`,
                        phoneNumber: this.state.phone,
                        email: this.state.email
                    }).then(() => {
                        this.setState({ loading: false });
                        this.saveUser(createdUser).then(() => {
                            console.log('user saved')
                        })
                    
                    }).catch(err => {
                        this.setState({ errors: this.state.errors.concat(err), loading: false })
                    })
                    localStorage.setItem('userData', JSON.stringify(createdUser));
                    console.log(createdUser);
                }).catch(err => {
                    this.setState({ errors: this.state.errors.concat(err), loading: false });
                    console.log(err);
                })
        }

    }
    saveUser = createdUser => {
      return this.state.userRef.child(createdUser.user.uid).set({
          name: createdUser.user.displayName,
          email: createdUser.user.email,
          photoURL: createdUser.user.photoURL,
          phoneNumber: createdUser.user.phoneNumber
      })
    }
    handelChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        const { first_name, last_name, password, email, phone, loading } = this.state;
        return (
            <React.Fragment>
                <Header location={this.props.history.location}></Header>
                <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div class="wrapper wrapper--w680">
                        <div class="card card-4">
                            <div class="card-body">
                                <h2 class="title">One Step Register Here</h2>
                                <form onSubmit={this.handleSubmit}>
                                    <div class="row row-space">
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">first name</label>
                                                <input class="input--style-4" type="text" name="first_name" value={first_name} onChange={this.handelChange} />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">last name</label>
                                                <input class="input--style-4" type="text" name="last_name" value={last_name} onChange={this.handelChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-space">
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="label">Password</label>
                                                <div class="input-group-icon">
                                                    <input className={this.handleInputError(this.state.errors, 'password')} type="password" name="password" value={password} onChange={this.handelChange} />
                                                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div class="col-6">
                                            <div class="form-group">
                                                <label class="label">Gender</label>
                                                <div class="p-t-10">
                                                    <label class="radio-container m-r-45">Male
                                            <input type="radio" checked="checked" name="gender" value={gender} onChange={this.handelChange} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="radio-container">Female
                                            <input type="radio" name="gender" value={gender} onChange={this.handelChange} />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div class="row row-space">
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Email</label>
                                                <input className={this.handleInputError(this.state.errors, 'email')} type="email" name="email" value={email} onChange={this.handelChange} />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Phone Number</label>
                                                <input class="input--style-4" type="text" name="phone" value={phone} onChange={this.handelChange} />
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.errors.length ?
                                        <div className="alert alert-danger m-t-10">{this.dispalyErrors(this.state.errors)}</div> : ''}

                                    <div class="p-t-15">
                                        <button className="btn btn-success" disabled={loading} type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}