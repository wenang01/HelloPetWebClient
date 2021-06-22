import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import Product from "../services/products.service"
import Categories from "../services/category.service"

export class Home extends Component {
    constructor(props) {
        super(props);
        this.retrieveDataProducts = this.retrieveDataProducts.bind(this)
        this.retrieveDataCategories = this.retrieveDataCategories.bind(this)

        this.state = {
            // currentUser: AuthService.getCurrentUser(),
            products: [],
            categories: []
        };
    }

    retrieveDataCategories() {
        Categories.getAllCategories().then(
            response => {
                this.setState({
                    categories: response.data
                })
            },
            error => {
                this.setState({
                    categories: error.response
                })
            }
        )
    }

    retrieveDataProducts() {
        Product.getProducts().then(
            response => {
                this.setState({
                    products: response.data
                })
            },
            error => {
                this.setState({
                    products: error.response
                })
            }
        )
    }

    componentDidMount() {
        this.retrieveDataCategories()
        this.retrieveDataProducts()
    }

    render() {
        const { products, categories } = this.state
        return (
            <div className="page-content page-home">
                <section className="store-carousel">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" data-aos="zoom-in">
                                <div
                                    id="storeCarousel"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        <li
                                            data-target="#storeCarousel"
                                            data-slide-to="0"
                                            className="active"
                                        ></li>
                                        <li data-target="#storeCarousel" data-slide-to="1"></li>
                                        <li data-target="#storeCarousel" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img
                                                src="assets/images/banner.jpg"
                                                className="d-block w-100"
                                                alt="Carousel"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="assets/images/banner.jpg"
                                                className="d-block w-100"
                                                alt="Carousel"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="assets/images/banner.jpg"
                                                className="d-block w-100"
                                                alt="Carousel"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="store-trend-categories">
                    <div className="container">
                        <div className="row">
                            <div className="col-12" data-aos="fade-up">
                                <h5>Trend Categories</h5>
                            </div>
                        </div>
                        <div className="row">
                            {categories && categories.map((cat) => (
                                <div
                                    className="col-6 col-md-3 col-lg-2"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <Link className="component-categories d-block" to="#">
                                        <div className="categories-image">
                                            <img
                                                src="assets/images/categories-gadgets.svg"
                                                alt="Gadgets Categories"
                                                className="w-100"
                                            />
                                        </div>
                                        <p className="categories-text">
                                            {cat.categoryName}
                                        </p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="store-new-products">
                    <div className="container">
                        <div className="row">
                            <div className="col-12" data-aos="fade-up">
                                <h5>New Products</h5>
                            </div>
                        </div>
                        <div className="row">
                            {products && products.map((product) => (
                                <div
                                    className="col-6 col-md-4 col-lg-3"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <Link className="component-products d-block" to={"/detailproduct/" + product.id}>
                                        <div className="products-thumbnail">
                                            <div
                                                className="products-image"
                                                style={{ backgroundImage: 'assets/images/' + product.productImage }}
                                            ></div>
                                        </div>
                                        <div className="products-text">
                                            {product.productName}
                                        </div>
                                        <div className="products-price">
                                            {product.price}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home

