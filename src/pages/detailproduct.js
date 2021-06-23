import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import Product from "../services/products.service"
import Categories from "../services/category.service"

export default class Detailproduct extends Component {

    constructor(props) {
        super(props);
        // this.getDataProducts = this.getDataProducts.bind(this)
        // this.getDataCategories = this.retrieveDataCategories.bind(this)
        // this.getGallery = this.getGallery.bind(this);


        this.state = {
            currentProduct: {
                id: null,
                productName: "",
                price: "",
                stok: "",
                productImage: "",
                description: "",
                categories: {},
                galleries: []
            },
            listCategory: [],
            listGalleries: [],
            message: "",
        };
    }

    componentDidMount() {
        this.getProduct(this.props.match.params.id);
        this.getCategory();
    }

    getCategory() {
        Categories.getAllCategories()
            .then((response) => {
                this.setState({
                    listCategory: response.data,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    getProduct(id) {
        console.log(id)
        Product.get(id)
            .then((response) => {
                this.setState({
                    currentProduct: response.data,
                    listGalleries: response.data.productGalleries,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }


    render() {
        const { currentProduct, listGalleries } = this.state
        return (
            <div className="page-content page-details">
                <section
                    className="store-breadcrumbs"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Product Details
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="store-gallery" id="gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8" data-aos="zoom-in">
                                <div name="slide-fade" mode="out-in">
                                    <img key="#" src={"http://localhost:3030/products/photo/" + currentProduct.productImage}
                                        className="w-100 main-image"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="row">
                                    <div
                                        className="col-3 col-lg-12 mt-2 mt-lg-0"
                                    // v-for="(photo, index) in photos"
                                    // key="#"
                                    // data-aos="zoom-in"
                                    // data-aos-delay="100"
                                    >
                                        {listGalleries && listGalleries.map((gl) => {
                                            <a href={"http://localhost:3030/products/photo/" + listGalleries.image}>
                                                <img src={"http://localhost:3030/products/photo/" + listGalleries.image}
                                                    className="w-100 thumbnail-image"
                                                    alt=""
                                                />
                                            </a>
                                        })}
                                        {/* <a href="#">
                                            <img src="#"
                                                className="w-100 thumbnail-image"
                                                alt=""
                                            />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="store-details-container" data-aos="fade-up">
                    <section className="store-heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h1>{currentProduct.productName}</h1>
                                    <div className="owner">{currentProduct.categories.categoryName}</div>
                                    <div className="owner">Stok : {currentProduct.stok}</div>
                                    <div className="price">Price Rp. {currentProduct.price}</div>
                                </div>
                                <div className="col-lg-2" data-aos="zoom-in">
                                    <a
                                        className="btn btn-success nav-link px-4 text-white btn-block mb-3"
                                        href="/cart.html"
                                    >Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="store-description">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <p>{currentProduct.description}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

// export default Detailproduct