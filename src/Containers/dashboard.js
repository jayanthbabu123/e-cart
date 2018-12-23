import React, { Component } from 'react';
import { Header } from '../boilerplate/header';
class Dashboard extends Component {
    state = {
        mobiles: []
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <React.Fragment>
                <Header location={this.props.history.location}></Header>
                <div class="container-fluid main-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div><a class="list-group-item active">Electronics</a>
                                <ul class="list-group">
                                    <li class="list-group-item">Mobile<span class="label label-primary pull-right">234</span></li>
                                    <li class="list-group-item">Computers<span class="label label-success pull-right">34</span></li>
                                    <li class="list-group-item">Tablets<span class="label label-danger pull-right">4</span></li>
                                    <li class="list-group-item">Appliances<span class="label label-info pull-right">434</span></li>
                                    <li class="list-group-item">Games &amp; Entertainment<span class="label label-success pull-right">34</span></li>
                                </ul>
                            </div>
                            <div><a class="list-group-item  list-group-item-success">Clothing &amp; Wears</a>
                                <ul class="list-group">
                                    <li class="list-group-item">Men's Clothing<span class="label label-danger pull-right">300</span></li>
                                    <li class="list-group-item">Women's Clothing<span class="label label-success pull-right">340</span></li>
                                    <li class="list-group-item">Kid's Wear<span class="label label-info pull-right">735</span></li>
                                </ul>
                            </div>
                            <div><a class="list-group-item active">Accessaries &amp; Extras</a>
                                <ul class="list-group">
                                    <li class="list-group-item">Mobile Accessaries<span class="label label-warning pull-right">456</span></li>
                                    <li class="list-group-item">Men's Accessaries<span class="label label-success pull-right">156</span></li>
                                    <li class="list-group-item">Women's Accessaries<span class="label label-info pull-right">400</span></li>
                                    <li class="list-group-item">Kid's Accessaries<span class="label label-primary pull-right">89</span></li>
                                    <li class="list-group-item">Home Products<span class="label label-danger pull-right">90</span></li>
                                    <li class="list-group-item">Kitchen Products<span class="label label-warning pull-right">567</span></li>
                                </ul>
                            </div>
                            <div>
                                <ul class="list-group">
                                    <li class="list-group-item list-group-item-success"><a >New Offer's Coming </a></li>
                                    <li class="list-group-item list-group-item-info"><a >New Products Added</a></li>
                                    <li class="list-group-item list-group-item-warning"><a >Ending Soon Offers</a></li>
                                    <li class="list-group-item list-group-item-danger"><a >Just Ended Offers</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </React.Fragment>

        )
    }
}

export default Dashboard;