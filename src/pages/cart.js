import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Produts from "../services/products.service"
import AuthService from "../services/auth.service"
import CartService from "../services/cart.service"

import axios from "axios";
import authHeader from "../services/auth-header";

export class Cart extends Component {

    constructor(props) {
        super(props)

        this.getCarts = this.getCarts.bind(this)
        this.getProducts = this.getProducts.bind(this)
        this.deleteCarts = this.deleteCarts.bind(this)
        this.tambahQty = this.tambahQty.bind(this)

        this.state = {
            qty: null,
            currentUser: undefined,
            currentCart: [],
            currentProduct: [],
            message: [],
            product: [],
            currentCarts: {
                id: null,
                users: "",
                products: "",
                quantity: "",
            },
            cartTempId: null
        }
    }

    componentDidMount() {

        const user = AuthService.getCurrentUser();
        if (user) {
            this.setState({
                currentUser: user.id,
            });
            console.log(user.id)
        }

        this.getCarts(user.id)
    }

    getProducts() {
        Produts.getProducts().then((response) => {
            this.setState({
                product: response.data
            })
            console.log(response.data)
        }).catch((e) => {
            console.log(e)
        })
    }

    getCarts(userId) {
        CartService.getAll(userId).then((response) => {
            this.setState({
                currentCart: response.data,
            })

            console.log(response.data)
        }).catch((e) => {
            console.log(e)
        })
    }

    onChangeQty(e) {
        const quantity = e.target.value;

        this.setState((prevState) => ({
            currentCarts: {
                ...prevState.currentCarts,
                quantity: quantity,
            },
        }));
    }

    onChangeProduct(e) {
        const products = e.target.value;

        this.setState((prevState) => ({
            currentCarts: {
                ...prevState.currentCarts,
                products: products,
            },
        }));
    }

    onChangeUser(e) {
        const users = e.target.value;

        this.setState((prevState) => ({
            currentCarts: {
                ...prevState.currentCarts,
                users: users,
            },
        }));
    }

    onChangeId(e) {
        const id = e.target.value
        this.setState((prevState) => ({
            currentCarts: {
                ...prevState.currentCarts,
                id: id,
            },
        }));
    }

    tambahQty = (userId, id) => {
        const form_data = new FormData();
        // const idCart = id; 
        form_data.append("id", this.state.currentCart.id);
        form_data.append("users", this.state.currentCart.user);
        form_data.append("products", this.state.currentCart.product);
        form_data.append("qty", this.state.currentCart.qty + 1);
        // const END_POINT = "carts/u/" + userId + "/c/" + id;
        // axios
        //     .put(
        //         "http://localhost:3030/" + END_POINT,
        //         form_data,
        //         { headers: authHeader() },
        //         {
        //             headers: {
        //                 "Content-Type": "multipart/form-data",
        //             },
        //         }
        //     )
        CartService.update(userId, id, form_data)
            .then(
                (response) => {
                    window.location.reload();
                    console.log(response.data);
                },
                (error) => {
                    console.log(error);
                    alert("Failed..!");
                }
            );
    };


    deleteCarts(id) {
        CartService.delete(id)
            .then((response) => {
                alert("Deleted Carts Successfully!");
                // let updateCarts = this.state.currentCart.filter((i) => i.id !== id);
                // this.setState({ currentCart: updateCarts });
                console.log(response.data);
                this.props.history.push("/carts/u/" + this.state.currentUser);
            })
            .catch((e) => {
                alert("Delete Failed!");
                console.log(e);
            });
    }


    render() {
        const { currentUser, currentCart } = this.state
        console.log(currentCart)

        return (
            <div class="page-content page-cart">
                <section
                    class="store-breadcrumbs"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">
                                            Cart
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="store-cart">
                    <div class="container">
                        <div class="row" data-aos="fade-up" data-aos-delay="100">
                            <div class="col-12 table-responsive">
                                <table
                                    class="table table-borderless table-cart"
                                    aria-describedby="Cart"
                                >
                                    <thead>
                                        <tr>
                                            <th scope="col" class="text-center">Image</th>
                                            <th scope="col" class="text-center">Name &amp; Seller</th>
                                            <th scope="col" class="text-center">Price</th>
                                            <th colspan="3" class="text-center" scope="col">Quantity</th>
                                            <th scope="col" class="text-center">Menu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentCart && currentCart.map((cc) => (
                                            <tr>
                                                <td style={{ width: '25%' }} class="text-center">
                                                    <img
                                                        src={"http://localhost:8080/products/photo/" + cc.product.productImage}
                                                        alt=""
                                                        class="cart-image"
                                                    />
                                                </td>
                                                <td style={{ width: '35%' }} class="text-center">
                                                    <div class="product-title">{cc.product.productName}</div>
                                                    {/* <div class="product-subtitle">{currentCarts.products.categories.categoryName}</div> */}
                                                </td>
                                                <td style={{ width: '35%' }} class="text-center">
                                                    <div class="product-title">{cc.product.price}</div>
                                                    <div class="product-subtitle">IDR</div>
                                                </td>
                                                <td style={{ width: '20%' }} class="text-center">
                                                    <button onClick={() => this.deleteCarts(cc.id)} class="btn btn-light">
                                                        <img src="/assets/images/minus.png" alt="" style={{ width: '25px', height: '25px' }}></img>
                                                    </button>
                                                </td>
                                                <td style={{ width: '20%' }} class="text-center">
                                                    {/* <input type="text" value={cc.qty} onChange={this.onChangeQty}>{cc.qty}</input> */}
                                                </td>
                                                <td style={{ width: '20%' }} class="text-center">
                                                    <button onClick={() => this.tambahQty(cc.users.id, cc.id)} class="btn btn-light">
                                                        <img src="/assets/images/plus.png" alt="" style={{ width: '25px', height: '25px' }}></img>
                                                    </button>
                                                </td>
                                                <td style={{ width: '20%' }} class="text-center">
                                                    <button onClick={() => this.deleteCarts(cc.id)} class="btn btn-remove-cart">
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row" data-aos="fade-up" data-aos-delay="150">
                            <div class="col-12">
                                <hr />
                            </div>
                            <div class="col-12">
                                <h2 class="mb-4">Shipping Details</h2>
                            </div>
                        </div>
                        <div class="row mb-2" data-aos="fade-up" data-aos-delay="200">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="addressOne">Address 1</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="addressOne"
                                        aria-describedby="emailHelp"
                                        name="addressOne"
                                        value="Setra Duta Cemara"
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="addressTwo">Address 2</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="addressTwo"
                                        aria-describedby="emailHelp"
                                        name="addressTwo"
                                        value="Blok B2 No. 34"
                                    />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="province">Province</label>
                                    <select name="province" id="province" class="form-control">
                                        <option value="West Java">West Java</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">

                                    Umi JuaraCoding Batch 8, [27.06.21 01:57]
                                    <label for="city">City</label>
                                    <select name="city" id="city" class="form-control">
                                        <option value="Bandung">Bandung</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="postalCode">Postal Code</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="postalCode"
                                        name="postalCode"
                                        value="40512"
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="country">Country</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="country"
                                        name="country"
                                        value="Indonesia"
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="mobile">Mobile</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="mobile"
                                        name="mobile"
                                        value="+628 2020 11111"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row" data-aos="fade-up" data-aos-delay="150">
                            <div class="col-12">
                                <hr />
                            </div>
                            <div class="col-12">
                                <h2>Payment Informations</h2>
                            </div>
                        </div>
                        <div class="row" data-aos="fade-up" data-aos-delay="200">
                            <div class="col-4 col-md-2">
                                <div class="product-title">$10</div>
                                <div class="product-subtitle">Country Tax</div>
                            </div>
                            <div class="col-4 col-md-3">
                                <div class="product-title">$280</div>
                                <div class="product-subtitle">Product Insurance</div>
                            </div>
                            <div class="col-4 col-md-2">
                                <div class="product-title">$580</div>
                                <div class="product-subtitle">Ship to Jakarta</div>
                            </div>
                            <div class="col-4 col-md-2">
                                <div class="product-title text-success">$392,409</div>
                                <div class="product-subtitle">Total</div>
                            </div>
                            <div class="col-8 col-md-3">
                                <Link
                                    to={"/transaction/u/" + currentUser}
                                    class="btn btn-success mt-4 px-4 btn-block"
                                >
                                    Checkout Now
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Cart