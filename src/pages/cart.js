import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Produts from "../services/products.service"
import AuthService from "../services/auth.service"
import Carts from "../services/cart.service"


export class Cart extends Component {

    constructor(props) {
        super(props)

        this.getCarts = this.getCarts.bind(this)
        this.getProducts = this.getProducts.bind(this)

        this.state = {
            userid: this.props.match.params.userId,
            productid: this.props.match.params.prodId,
            qty: null,
            currentCart: {
                id: null,
                userid: null,
                productid: null,
                categoryId:null,
                qty: null,
            },
            currentCarts: [],
            message: [],
            user: undefined,
            product: [],
            currentUser: null,
        }
    }

    componentDidMount() {
        // this.addToCart()
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
        })
    }

    getCarts(userId) {
        Carts.getAll(userId).then((response) => {
            this.setState({
                currentCarts: response.data,
                currentCart: {
                    id: response.data.id,
                    userid: response.data.user.id,
                    productid: response.data.product.id,
                    qty: response.data.qty
                }
            })
            console.log(response.data)
        }).catch((e) => {
            console.log(e)
        })
    }

    addToCart() {
        var data = {
            user: {
                id: this.state.currentUser
            },
            product: {
                id: this.props.match.params.prodId
            },
            qty: this.state.qty + 1
        }
        Carts.add(data).then((response) => {
            alert("Product Added to cart !")
            this.props.history.push("/carts/u/" + this.state.currentUser)
            console.log("add cart : " + response.data)
            this.setState({
                currentProduct: { id: response.data.product.id },
                qty: response.data.qty,
            })
        })
    }


    render() {
        const { currentCarts, currentCart } = this.state
        console.log(currentCart)
        const display = Object.keys(currentCarts).map((d, key) => {
            return (
                <>
                    {/* <li key={key}>{currentCarts.product.productName}</li> */}
                    <tr>
                        <td style={{ width: '25%' }}>
                            <img
                                src={"http://localhost:3030/product/photos/" + currentCarts.product.productImage}
                                alt=""
                                class="cart-image"
                            />
                        </td>
                        <td style={{ width: '35%' }}>
                            <div class="product-title">{currentCarts.product.productName}</div>
                            <div class="product-subtitle">{currentCarts.product.categories.categoryName}</div>
                        </td>
                        <td style={{ width: '35%' }}>
                            <div class="product-title">{currentCarts.product.price}</div>
                            <div class="product-subtitle">IDR</div>
                        </td>
                        <td style={{ width: '20%' }}>
                            <Link href="#" class="btn btn-remove-cart">
                                Remove
                            </Link>
                        </td>
                    </tr>
                </>
            )
        })
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
                                            <th scope="col">Image</th>
                                            <th scope="col">Name &amp; Seller</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Menu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {display}
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
                                    href="/success.html"
                                    class="btn btn-success mt-4 px-4 btn-block"
                                >
                                    Checkout Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Cart
