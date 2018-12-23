import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {startSignOut} from '../firebase/auth';
class Home extends Component {
    state={
     userData: null
    }
    componentDidMount(){
        this.setState({userData: JSON.parse(localStorage.getItem('userData'))})
    }
    render() {
        return (
            <header>
                <div class="header_main">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-2 col-sm-3 col-3 order-1">
                                <div class="logo_container">
                                    <div class="logo"><a href="#">One Buy</a></div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                                <div class="header_search">
                                    <div class="header_search_content">
                                        <div class="header_search_form_container">
                                            <form action="#" class="header_search_form clearfix">
                                                <input type="search" required="required" class="header_search_input" placeholder="Search for products..." />
                                                <div class="custom_dropdown">
                                                    <div class="custom_dropdown_list">
                                                        <span class="custom_dropdown_placeholder clc">All Categories</span>
                                                        <i class="fas fa-chevron-down"></i>
                                                        <ul class="custom_list clc">
                                                            <li><a class="clc" href="#">All Categories</a></li>
                                                            <li><a class="clc" href="#">Computers</a></li>
                                                            <li><a class="clc" href="#">Laptops</a></li>
                                                            <li><a class="clc" href="#">Cameras</a></li>
                                                            <li><a class="clc" href="#">Hardware</a></li>
                                                            <li><a class="clc" href="#">Smartphones</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <button type="submit" class="header_search_button trans_300" value="Submit"><img src={require('../Images/home/search.png')} alt="" /></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                                <div class="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                                    <div class="wishlist d-flex flex-row align-items-center justify-content-end">
                                        <div class="wishlist_icon"><img src={require('../Images/home/heart.png')} alt="" /></div>
                                        <div class="wishlist_content">
                                            <div class="wishlist_text"><a href="#">Wishlist</a></div>
                                            <div class="wishlist_count">115</div>
                                        </div>
                                    </div>


                                    <div class="cart">
                                        <div class="cart_container d-flex flex-row align-items-center justify-content-end">
                                            <div class="cart_icon">
                                                <img src={require('../Images/home/cart.png')} alt="" />
                                                <div class="cart_count"><span>10</span></div>
                                            </div>
                                            <div class="cart_content">
                                                <div class="cart_text"><a href="#">Cart</a></div>
                                                <div class="cart_price">$85</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="login_button">
                                        <button className="btn btn-primary" >{this.state.userData ? <Link to="/login" onClick={startSignOut()}>Logout</Link>: <Link to="/login" >Login</Link>}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="main_nav">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="main_nav_content d-flex flex-row">
                                    <div class="cat_menu_container">
                                        <div class="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                            <div class="cat_burger"><span></span><span></span><span></span></div>
                                            <div class="cat_menu_text">categories</div>
                                        </div>
                                        <ul class="cat_menu">
                                            <li><a href="#">Computers &amp; Laptops <i class="fas fa-chevron-right ml-auto"></i></a></li>
                                            <li><a href="#">Cameras &amp; Photos<i class="fas fa-chevron-right"></i></a></li>
                                            <li class="hassubs">
                                                <a href="#">Hardware<i class="fas fa-chevron-right"></i></a>
                                                <ul>
                                                    <li class="hassubs">
                                                        <a href="#">Menu Item<i class="fas fa-chevron-right"></i></a>
                                                        <ul>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fas fa-chevron-right"></i></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Smartphones &amp; Tablets<i class="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">TV &amp; Audio<i class="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">Gadgets<i class="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">Car Electronics<i class="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">Video Games &amp; Consoles<i class="fas fa-chevron-right"></i></a></li>
                                            <li><a href="#">Accessories<i class="fas fa-chevron-right"></i></a></li>
                                        </ul>
                                    </div>

                                    <div class="main_nav_menu ml-auto">
                                        <ul class="standard_dropdown main_nav_dropdown">
                                            <li><a href="#">Home<i class="fas fa-chevron-down"></i></a></li>
                                            <li class="hassubs">
                                                <a href="#">Super Deals<i class="fas fa-chevron-down"></i></a>
                                                <ul>
                                                    <li>
                                                        <a href="#">Menu Item<i class="fas fa-chevron-down"></i></a>
                                                        <ul>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                </ul>
                                            </li>
                                            <li class="hassubs">
                                                <a href="#">Featured Brands<i class="fas fa-chevron-down"></i></a>
                                                <ul>
                                                    <li>
                                                        <a href="#">Menu Item<i class="fas fa-chevron-down"></i></a>
                                                        <ul>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                            <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                    <li><a href="#">Menu Item<i class="fas fa-chevron-down"></i></a></li>
                                                </ul>
                                            </li>
                                            <li class="hassubs">
                                                <a href="#">Pages<i class="fas fa-chevron-down"></i></a>
                                                <ul>
                                                    <li><a href="shop.html">Shop<i class="fas fa-chevron-down"></i></a></li>
                                                    <li><a href="product.html">Product<i class="fas fa-chevron-down"></i></a></li>
                                                    <li><a href="blog.html">Blog<i class="fas fa-chevron-down"></i></a></li>
                                                    <li><a href="blog_single.html">Blog Post<i class="fas fa-chevron-down"></i></a></li>
                                                    <li><a href="regular.html">Regular Post<i class="fas fa-chevron-down"></i></a></li>
                                                    <li><a href="cart.html">Cart<i class="fas fa-chevron-down"></i></a></li>
                                                    <li><a href="contact.html">Contact<i class="fas fa-chevron-down"></i></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="blog.html">Blog<i class="fas fa-chevron-down"></i></a></li>
                                            <li><a href="contact.html">Contact<i class="fas fa-chevron-down"></i></a></li>
                                        </ul>
                                    </div>

                                    <div class="menu_trigger_container ml-auto">
                                        <div class="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                            <div class="menu_burger">
                                                <div class="menu_trigger_text">menu</div>
                                                <div class="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="banner">
                    <div class="banner_background" ></div>
                    <div class="container fill_height">
                        <div class="row fill_height">
                            <div class="banner_product_image"><img src={require('../Images/banner_product.png')} alt="" /></div>
                            <div class="col-lg-5 offset-lg-4 fill_height">
                                <div class="banner_content">
                                    <h1 class="banner_text">new era of E-Commerce</h1>
                                    <div class="banner_price"><span>$530</span>$460</div>
                                    <div class="banner_product_name">Apple Iphone 6s</div>
                                    <div class="button banner_button"><a href="#">Shop Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="characteristics">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 char_col">
                                <div class="char_item d-flex flex-row align-items-center justify-content-start">
                                    <div class="char_icon"><img src={require('../Images/home/char_1.png')} alt="" /></div>
                                    <div class="char_content">
                                        <div class="char_title">Free Delivery</div>
                                        <div class="char_subtitle">from $50</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 char_col">
                                <div class="char_item d-flex flex-row align-items-center justify-content-start">
                                    <div class="char_icon"><img src={require('../Images/home/char_2.png')} alt="" /></div>
                                    <div class="char_content">
                                        <div class="char_title">Easy Returns</div>
                                        <div class="char_subtitle">Free</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 char_col">
                                <div class="char_item d-flex flex-row align-items-center justify-content-start">
                                    <div class="char_icon"><img src={require('../Images/home/char_3.png')} alt="" /></div>
                                    <div class="char_content">
                                        <div class="char_title">Money back</div>
                                        <div class="char_subtitle">100%</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 char_col">
                                <div class="char_item d-flex flex-row align-items-center justify-content-start">
                                    <div class="char_icon"><img src={require('../Images/home/char_4.png')} alt="" /></div>
                                    <div class="char_content">
                                        <div class="char_title">Support </div>
                                        <div class="char_subtitle">24/7</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="best_sellers">
                    <div class="container">
                        <div class="row">
                            <div className="tabbed_container">
                                <div class="tabs clearfix tabs-right">
                                    <div class="new_arrivals_title">Hot Best Sellers</div>
                                    <ul class="clearfix">
                                        <li class="active">Top 20</li>
                                        <li>Audio &amp; Video</li>
                                        <li>Laptops &amp; Computers</li>
                                    </ul>
                                    <div class="tabs_line"><span style={{ left: "666.828px", width: "58.1094px" }}></span></div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="tabbed_container">
                                    <div class="bestsellers_item discount" style={{ width: "100%", display: "inline-block" }}>
                                        <div class="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                            <div class="bestsellers_image"><img src={require('../Images/home/best_1.png')} alt="" /></div>
                                            <div class="bestsellers_content">
                                                <div class="bestsellers_category"><a href="#" tabindex="0">Headphones</a></div>
                                                <div class="bestsellers_name"><a href="product.html" tabindex="0">Xiaomi Redmi Note 4</a></div>
                                                <div class="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="bestsellers_price discount">$225<span>$300</span></div>
                                            </div>
                                        </div>
                                        <div class="bestsellers_fav active"><i class="fas fa-heart"></i></div>
                                        <ul class="bestsellers_marks">
                                            <li class="bestsellers_mark bestsellers_discount">-25%</li>
                                            <li class="bestsellers_mark bestsellers_new">new</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div class="col">
                                <div class="tabbed_container">
                                    <div class="bestsellers_item discount" style={{ width: "100%", display: "inline-block" }}>
                                        <div class="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                            <div class="bestsellers_image"><img src={require('../Images/home/best_1.png')} alt="" /></div>
                                            <div class="bestsellers_content">
                                                <div class="bestsellers_category"><a href="#" tabindex="0">Headphones</a></div>
                                                <div class="bestsellers_name"><a href="product.html" tabindex="0">Xiaomi Redmi Note 4</a></div>
                                                <div class="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="bestsellers_price discount">$225<span>$300</span></div>
                                            </div>
                                        </div>
                                        <div class="bestsellers_fav active"><i class="fas fa-heart"></i></div>
                                        <ul class="bestsellers_marks">
                                            <li class="bestsellers_mark bestsellers_discount">-25%</li>
                                            <li class="bestsellers_mark bestsellers_new">new</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="col">
                                <div class="tabbed_container">

                                    <div class="bestsellers_item discount" style={{ width: "100%", display: "inline-block" }}>
                                        <div class="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                            <div class="bestsellers_image"><img src={require('../Images/home/best_1.png')} alt="" /></div>
                                            <div class="bestsellers_content">
                                                <div class="bestsellers_category"><a href="#" tabindex="0">Headphones</a></div>
                                                <div class="bestsellers_name"><a href="product.html" tabindex="0">Xiaomi Redmi Note 4</a></div>
                                                <div class="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="bestsellers_price discount">$225<span>$300</span></div>
                                            </div>
                                        </div>
                                        <div class="bestsellers_fav active"><i class="fas fa-heart"></i></div>
                                        <ul class="bestsellers_marks">
                                            <li class="bestsellers_mark bestsellers_discount">-25%</li>
                                            <li class="bestsellers_mark bestsellers_new">new</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="row">
                            <div class="col">
                                <div class="tabbed_container">
                                    <div class="bestsellers_item discount" style={{ width: "100%", display: "inline-block" }}>
                                        <div class="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                            <div class="bestsellers_image"><img src={require('../Images/home/best_1.png')} alt="" /></div>
                                            <div class="bestsellers_content">
                                                <div class="bestsellers_category"><a href="#" tabindex="0">Headphones</a></div>
                                                <div class="bestsellers_name"><a href="product.html" tabindex="0">Xiaomi Redmi Note 4</a></div>
                                                <div class="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="bestsellers_price discount">$225<span>$300</span></div>
                                            </div>
                                        </div>
                                        <div class="bestsellers_fav active"><i class="fas fa-heart"></i></div>
                                        <ul class="bestsellers_marks">
                                            <li class="bestsellers_mark bestsellers_discount">-25%</li>
                                            <li class="bestsellers_mark bestsellers_new">new</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="col">
                                <div class="tabbed_container">
                                    <div class="bestsellers_item discount" style={{ width: "100%", display: "inline-block" }}>
                                        <div class="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                            <div class="bestsellers_image"><img src={require('../Images/home/best_1.png')} alt="" /></div>
                                            <div class="bestsellers_content">
                                                <div class="bestsellers_category"><a href="#" tabindex="0">Headphones</a></div>
                                                <div class="bestsellers_name"><a href="product.html" tabindex="0">Xiaomi Redmi Note 4</a></div>
                                                <div class="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="bestsellers_price discount">$225<span>$300</span></div>
                                            </div>
                                        </div>
                                        <div class="bestsellers_fav active"><i class="fas fa-heart"></i></div>
                                        <ul class="bestsellers_marks">
                                            <li class="bestsellers_mark bestsellers_discount">-25%</li>
                                            <li class="bestsellers_mark bestsellers_new">new</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="col">
                                <div class="tabbed_container">
                                    <div class="bestsellers_item discount" style={{ width: "100%", display: "inline-block" }}>
                                        <div class="bestsellers_item_container d-flex flex-row align-items-center justify-content-start">
                                            <div class="bestsellers_image"><img src={require('../Images/home/best_1.png')} alt="" /></div>
                                            <div class="bestsellers_content">
                                                <div class="bestsellers_category"><a href="#" tabindex="0">Headphones</a></div>
                                                <div class="bestsellers_name"><a href="product.html" tabindex="0">Xiaomi Redmi Note 4</a></div>
                                                <div class="rating_r rating_r_4 bestsellers_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="bestsellers_price discount">$225<span>$300</span></div>
                                            </div>
                                        </div>
                                        <div class="bestsellers_fav active"><i class="fas fa-heart"></i></div>
                                        <ul class="bestsellers_marks">
                                            <li class="bestsellers_mark bestsellers_discount">-25%</li>
                                            <li class="bestsellers_mark bestsellers_new">new</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="reviews">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="reviews_title_container">
                                    <h3 class="reviews_title">Latest Reviews</h3>
                                    <div class="reviews_all ml-auto"><a href="#">view all <span>reviews</span></a></div>
                                </div>
                            </div>

                        </div>
                        <div className="reviews_slider_container">
                            <div className="row">
                                <div className="col">
                                    <div class="review d-flex flex-row align-items-start justify-content-start">
                                        <div><div class="review_image"><img src={require('../Images/home/review_1.jpg')} alt="" /></div></div>
                                        <div class="review_content">
                                            <div class="review_name">Roberto Sanchez</div>
                                            <div class="review_rating_container">
                                                <div class="rating_r rating_r_4 review_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="review_time">2 day ago</div>
                                            </div>
                                            <div class="review_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="review d-flex flex-row align-items-start justify-content-start">
                                        <div><div class="review_image"><img src={require('../Images/home/review_2.jpg')} alt="" /></div></div>
                                        <div class="review_content">
                                            <div class="review_name">Roberto Sanchez</div>
                                            <div class="review_rating_container">
                                                <div class="rating_r rating_r_4 review_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="review_time">2 day ago</div>
                                            </div>
                                            <div class="review_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="review d-flex flex-row align-items-start justify-content-start">
                                        <div><div class="review_image"><img src={require('../Images/home/review_3.jpg')} alt="" /></div></div>
                                        <div class="review_content">
                                            <div class="review_name">Roberto Sanchez</div>
                                            <div class="review_rating_container">
                                                <div class="rating_r rating_r_4 review_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="review_time">2 day ago</div>
                                            </div>
                                            <div class="review_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum laoreet.</p></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div class="viewed">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="viewed_title_container">
                                    <h3 class="viewed_title">Recently Viewed</h3>
                                </div>

                            </div>

                        </div>
                        <div className="viewed_slider_container">
                            <div className="row">
                                <div className="col">
                                    <div class="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="viewed_image"><img src={require('../Images/home/view_2.jpg')} alt="" /></div>
                                        <div class="viewed_content text-center">
                                            <div class="viewed_price">$379</div>
                                            <div class="viewed_name"><a href="#">LUNA Smartphone</a></div>
                                        </div>
                                        <ul class="item_marks">
                                            <li class="item_mark item_discount">-25%</li>
                                            <li class="item_mark item_new">new</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="viewed_image"><img src={require('../Images/home/view_3.jpg')} alt="" /></div>
                                        <div class="viewed_content text-center">
                                            <div class="viewed_price">$379</div>
                                            <div class="viewed_name"><a href="#">LUNA Smartphone</a></div>
                                        </div>
                                        <ul class="item_marks">
                                            <li class="item_mark item_discount">-25%</li>
                                            <li class="item_mark item_new">new</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="viewed_image"><img src={require('../Images/home/view_4.jpg')} alt="" /></div>
                                        <div class="viewed_content text-center">
                                            <div class="viewed_price">$379</div>
                                            <div class="viewed_name"><a href="#">LUNA Smartphone</a></div>
                                        </div>
                                        <ul class="item_marks">
                                            <li class="item_mark item_discount">-25%</li>
                                            <li class="item_mark item_new">new</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="viewed_image"><img src={require('../Images/home/view_5.jpg')} alt="" /></div>
                                        <div class="viewed_content text-center">
                                            <div class="viewed_price">$379</div>
                                            <div class="viewed_name"><a href="#">LUNA Smartphone</a></div>
                                        </div>
                                        <ul class="item_marks">
                                            <li class="item_mark item_discount">-25%</li>
                                            <li class="item_mark item_new">new</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="viewed_image"><img src={require('../Images/home/view_6.jpg')} alt="" /></div>
                                        <div class="viewed_content text-center">
                                            <div class="viewed_price">$379</div>
                                            <div class="viewed_name"><a href="#">LUNA Smartphone</a></div>
                                        </div>
                                        <ul class="item_marks">
                                            <li class="item_mark item_discount">-25%</li>
                                            <li class="item_mark item_new">new</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="viewed_item d-flex flex-column align-items-center justify-content-center text-center">
                                        <div class="viewed_image"><img src={require('../Images/home/view_3.jpg')} alt="" /></div>
                                        <div class="viewed_content text-center">
                                            <div class="viewed_price">$379</div>
                                            <div class="viewed_name"><a href="#">LUNA Smartphone</a></div>
                                        </div>
                                        <ul class="item_marks">
                                            <li class="item_mark item_discount">-25%</li>
                                            <li class="item_mark item_new">new</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="newsletter">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="newsletter_container d-flex flex-lg-row flex-column align-items-lg-center align-items-center justify-content-lg-start justify-content-center">
                                    <div class="newsletter_title_container">
                                        <div class="newsletter_icon"><img src={require('../Images/home/send.png')} alt="" /></div>
                                        <div class="newsletter_title">Sign up for Newsletter</div>
                                        <div class="newsletter_text"><p>...and receive %20 coupon for first shopping.</p></div>
                                    </div>
                                    <div class="newsletter_content clearfix">
                                        <form action="#" class="newsletter_form">
                                            <input type="email" class="newsletter_input" required="required" placeholder="Enter your email address" />
                                            <button class="newsletter_button">Subscribe</button>
                                        </form>
                                        <div class="newsletter_unsubscribe_link"><a href="#">unsubscribe</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 footer_col">
                                <div class="footer_column footer_contact">
                                    <div class="logo_container">
                                        <div class="logo"><a href="#">One Buy</a></div>
                                    </div>
                                    <div class="footer_title">Got Question? Call Us 24/7</div>
                                    <div class="footer_phone">+38 068 005 3570</div>
                                    <div class="footer_contact_text">
                                        <p>17 Princess Road, London</p>
                                        <p>Grester London NW18JR, UK</p>
                                    </div>
                                    <div class="footer_social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                            <li><a href="#"><i class="fab fa-google"></i></a></li>
                                            <li><a href="#"><i class="fab fa-vimeo-v"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2 offset-lg-2">
                                <div class="footer_column">
                                    <div class="footer_title">Find it Fast</div>
                                    <ul class="footer_list">
                                        <li><a href="#">Computers &amp; Laptops</a></li>
                                        <li><a href="#">Cameras &amp; Photos</a></li>
                                        <li><a href="#">Hardware</a></li>
                                        <li><a href="#">Smartphones &amp; Tablets</a></li>
                                        <li><a href="#">TV &amp; Audio</a></li>
                                    </ul>
                                    <div class="footer_subtitle">Gadgets</div>
                                    <ul class="footer_list">
                                        <li><a href="#">Car Electronics</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div class="footer_column">
                                    <ul class="footer_list footer_list_2">
                                        <li><a href="#">Video Games &amp; Consoles</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Cameras &amp; Photos</a></li>
                                        <li><a href="#">Hardware</a></li>
                                        <li><a href="#">Computers &amp; Laptops</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-2">
                                <div class="footer_column">
                                    <div class="footer_title">Customer Care</div>
                                    <ul class="footer_list">
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Order Tracking</a></li>
                                        <li><a href="#">Wish List</a></li>
                                        <li><a href="#">Customer Services</a></li>
                                        <li><a href="#">Returns / Exchange</a></li>
                                        <li><a href="#">FAQs</a></li>
                                        <li><a href="#">Product Support</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
            </header>

        );
    }
}

export default Home;