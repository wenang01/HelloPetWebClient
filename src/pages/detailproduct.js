import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"
import Product from "../services/products.service"
import Categories from "../services/category.service"

// export default function detailproduct() {
//     const { id } = useParams()
//     return (
//         <div>

//         </div>
//     )
// }

export default class Detailproduct extends Component {

    constructor(props) {
        super(props);
        // this.getDataProducts = this.getDataProducts.bind(this)
        // this.retrieveDataCategories = this.retrieveDataCategories.bind(this)

        this.state = {
            currentProduct: {
                id: null,
                productName: "",
                price: "",
                stok: "",
                productImage: "",
                description: "",
                categories: {},
            },
            listCategory: [],
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
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        const { currentProduct } = this.state
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
                                {/* <transition name="slide-fade" mode="out-in">
                                        <img src=""
                                            className="w-100 main-image"
                                            alt=""
                                        />
                                    </transition> */}
                            </div>
                            <div className="col-lg-2">
                                <div className="row">
                                    <div
                                        className="col-3 col-lg-12 mt-2 mt-lg-0"
                                        v-for="(photo, index) in photos"
                                        data-aos="zoom-in"
                                        data-aos-delay="100"
                                    >
                                        <a href="#">
                                            <img
                                                src="photo.url"
                                                className="w-100 thumbnail-image"
                                                alt=""
                                            />
                                        </a>
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
                                    {/* <div className="owner">{currentProduct.categories}</div> */}
                                    <div className="price">{currentProduct.price}</div>
                                    <div className="price">{currentProduct.stok}</div>
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
                    {/* <section className="store-review">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 mt-3 mb-3">
                                    <h5>Customer Review (3)</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <ul className="list-unstyled">
                                        <li className="media">
                                            <img
                                                src="assets/images/icon-testimonial-1.png"
                                                className="mr-3 rounded-circle"
                                                alt=""
                                            />
                                            <div className="media-body">
                                                <h5 className="mt-2 mb-1">Hazza Risky</h5>
                                                I thought it was not good for living room. I really happy
                                                to decided buy this product last week now feels like
                                                homey.
                                            </div>
                                        </li>
                                        <li className="media my-4">
                                            <img
                                                src="assets/images/icon-testimonial-2.png"
                                                className="mr-3 rounded-circle"
                                                alt=""
                                            />
                                            <div className="media-body">
                                                <h5 className="mt-2 mb-1">Anna Sukkirata</h5>
                                                Color is great with the minimalist concept. Even I thought
                                                it was made by Cactus industry. I do really satisfied with
                                                this.
                                            </div>
                                        </li>
                                        <li className="media">
                                            <img
                                                src="assets/images/icon-testimonial-3.png"
                                                className="mr-3 rounded-circle"
                                                alt=""
                                            />
                                            <div className="media-body">
                                                <h5 className="mt-2 mb-1">Dakimu Wangi</h5>
                                                When I saw at first, it was really awesome to have with.
                                                Just let me know if there is another upcoming product like
                                                this.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>
            </div>
        )
    }
}

// export default Detailproduct