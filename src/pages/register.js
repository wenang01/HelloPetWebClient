import React, { Component } from 'react'

export class Register extends Component {
    render() {
        return (
            <div className="page-content page-auth mt-5" id="register">
                <div className="section-store-auth" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <h2>
                                    Memulai untuk jual beli <br />
                                    dengan cara terbaru
                                </h2>
                                <form className="mt-3">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control is-valid"
                                            autofocus
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            className="form-control is-invalid"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Store</label>
                                        <p className="text-muted">
                                            Apakah anda juga ingin membuka toko?
                                        </p>
                                        <div
                                            className="custom-control custom-radio custom-control-inline"
                                        >
                                            <input
                                                className="custom-control-input"
                                                type="radio"
                                                name="is_store_open"
                                                id="openStoreTrue"
                                            />
                                            <label className="custom-control-label" for="openStoreTrue"
                                            >Iya, boleh</label
                                            >
                                        </div>
                                        <div
                                            className="custom-control custom-radio custom-control-inline"
                                        >
                                            <input
                                                className="custom-control-input"
                                                type="radio"
                                                name="is_store_open"
                                                id="openStoreFalse"
                                            />
                                            <label
                                                makasih
                                                className="custom-control-label"
                                                for="openStoreFalse"
                                            >Enggak, makasih</label
                                            >
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Nama Toko</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Kategori</label>
                                        <select name="category" className="form-control">
                                            <option value="" disabled>Select Category</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-success btn-block mt-4">
                                        Sign Up Now
                                    </button>
                                    <button type="submit" className="btn btn-signup btn-block mt-2">
                                        Back to Sign In
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
