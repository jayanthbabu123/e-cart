import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import { Link } from 'react-router-dom';
import { startSignOut } from '../firebase/auth';
export class Header extends Component {
    constructor(props) {
        super(props);
        console.log('header',props);
        this.state = {
            userData: null
        }
    }

    componentDidMount() {
        this.setState({ userData: JSON.parse(localStorage.getItem('userData')) })
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand header-title" ><div class="logo_container">
                        <div class="logo"><a href="#">One Buy</a></div>
                    </div></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {this.props.location.pathname === '/login' || this.props.location.pathname === '/register' ? <ul className="navbar-nav mr-auto" >
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                        </ul> : <ul className="navbar-nav mr-auto" >
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/view-product">View Product</Link>
                                </li>
                            </ul>}
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            {this.props.location.pathname === '/login' ? <button className="btn btn-primary login_button" ><Link to="/register">Register</Link> </button> : ''}
                            {this.props.location.pathname === '/register' ? <button className="btn btn-primary login_button" ><Link to="/login">Login</Link> </button> : ''}
                            {this.state.userData ? <button className="btn btn-primary login_button" ><Link to="/login" onClick={startSignOut()}>Logout</Link> </button> : ""}
                        </form>
                    </div>
                </nav>
            </React.Fragment>

        )
    }

}
