import React, { Component } from 'react';
import {Header} from '../boilerplate/header';
export default class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <Header location={this.props.history.location}></Header>
                <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div class="wrapper wrapper--w680">
                        <div class="card card-4">
                            <div class="card-body">
                                <h2 class="title">One Step Register Here</h2>
                                <form>
                                    <div class="row row-space">
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">first name</label>
                                                <input class="input--style-4" type="text" name="first_name" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">last name</label>
                                                <input class="input--style-4" type="text" name="last_name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-space">
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Birthday</label>
                                                <div class="input-group-icon">
                                                    <input class="input--style-4 js-datepicker" type="text" name="birthday" />
                                                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="label">Gender</label>
                                                <div class="p-t-10">
                                                    <label class="radio-container m-r-45">Male
                                            <input type="radio" checked="checked" name="gender" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="radio-container">Female
                                            <input type="radio" name="gender" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-space">
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Email</label>
                                                <input class="input--style-4" type="email" name="email" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="input-group">
                                                <label class="label">Phone Number</label>
                                                <input class="input--style-4" type="text" name="phone" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="p-t-15">
                                        <button class="btn btn-success" type="submit">Submit</button>
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