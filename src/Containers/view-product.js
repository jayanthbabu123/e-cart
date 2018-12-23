import React, { Component } from 'react';
import { Header } from '../boilerplate/header';

export default class ViewProduct extends Component {
    render() {
        return (
            <React.Fragment>
                <Header location={this.props.history.location}></Header>
                <div class="single_product">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-2 order-lg-1 order-2">
                                <ul class="image_list">
                                    <li ><img src={require("/../Images/home/single_4.jpg")} alt="" /></li>
                                    <li ><img src={require("/../Images/home/single_2.jpg")} alt="" /></li>
                                    <li ><img src={require("/../Images/home/single_3.jpg")} alt="" /></li>
                                </ul>
                            </div>
                            <div class="col-lg-5 order-lg-2 order-1">
                                <div class="image_selected"><img src={require("/../Images/home/single_4.jpg")} alt="" /></div>
                            </div>
                            <div class="col-lg-5 order-3">
                                <div class="product_description">
                                    <div class="product_category">Laptops</div>
                                    <div class="product_name">MacBook Air 13</div>
                                    <div class="rating_r rating_r_4 product_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                    <div class="product_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum. laoreet turpis, nec sollicitudin dolor cursus at. Maecenas aliquet, dolor a faucibus efficitur, nisi tellus cursus urna, eget dictum lacus turpis.</p></div>
                                    <div class="order_info d-flex flex-row">
                                        <form action="#">
                                            <div class="clearfix" style={{ zIndex: 1000 }}>
                                                <div class="product_quantity clearfix">
                                                    <span>Quantity: </span>
                                                    <input id="quantity_input" type="text" pattern="[0-9]*" value="1" />
                                                    <div class="quantity_buttons">
                                                        <div id="quantity_inc_button" class="quantity_inc quantity_control"><i class="fas fa-chevron-up"></i></div>
                                                        <div id="quantity_dec_button" class="quantity_dec quantity_control"><i class="fas fa-chevron-down"></i></div>
                                                    </div>
                                                </div>

                                                <ul class="product_color">
                                                    <li>
                                                        <span>Color: </span>
                                                        <div class="color_mark_container"><div id="selected_color" class="color_mark"></div></div>
                                                        <div class="color_dropdown_button"><i class="fas fa-chevron-down"></i></div>

                                                        <ul class="color_list">
                                                            <li><div class="color_mark" style={{ background: "#999999" }}></div></li>
                                                            <li><div class="color_mark" style={{ background: "#b19c83" }}></div></li>
                                                            <li><div class="color_mark" style={{ background: "#000000" }}></div></li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                            </div>

                                            <div class="product_price">$2000</div>
                                            <div class="button_container">
                                                <button type="button" class="button cart_button">Add to Cart</button>
                                                <div class="product_fav"><i class="fas fa-heart"></i></div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}