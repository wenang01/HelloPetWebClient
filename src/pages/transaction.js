import React, { Component } from 'react'

export class Transaction extends Component {
    render() {
        return (
            <div>
                <div>
                    <div data-theme="light" id="rajaongkir-widget"></div>
                </div>
                <div
                    className="page-content"
                    data-aos="fade-up"
                >
                    <div className="container-fluid">
                        <div className="dashboard-heading">
                            <h2 className="dashboard-title">#STORE0839</h2>
                            <p className="dashboard-subtitle">
                                Transaction Details
                            </p>
                        </div>
                        <div className="dashboard-content" id="transactionDetails">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12 col-md-4">
                                                    <img
                                                        src="/assets/images/product-details-dashboard.png"
                                                        alt=""
                                                        className="w-100 mb-3"
                                                    />
                                                </div>
                                                <div className="col-12 col-md-8">
                                                    <div className="row">
                                                        <div className="col-12 col-md-6">
                                                            <div className="product-title">Customer Name</div>
                                                            <div className="product-subtitle">Angga Risky</div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="product-title">Product Name</div>
                                                            <div className="product-subtitle">
                                                                Shirup Marzzan
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="product-title">
                                                                Date of Transaction
                                                            </div>
                                                            <div className="product-subtitle">
                                                                12 Januari, 2020
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="product-title">Status</div>
                                                            <div className="product-subtitle text-danger">
                                                                {"{{status}}"}
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="product-title">Total Amount</div>
                                                            <div className="product-subtitle">$280,409</div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="product-title">Mobile</div>
                                                            <div className="product-subtitle">
                                                                +628 2020 11111
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 mt-4">
                                                    <h5>
                                                        Shipping Informations
                                                    </h5>
                                                    <div className="row">
                                                        <div className="col-12 col-md-6">
                                                            <div className="product-title">Address 1</div>
                                                            <div className="product-subtitle">
                                                                Setra Duta Cemara
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="product-title">Address 2</div>
                                                            <div className="product-subtitle">
                                                                Blok B2 No. 34
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="product-title">
                                                                Province
                                                            </div>
                                                            <div className="product-subtitle">
                                                                West Java
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="product-title">City</div>
                                                            <div className="product-subtitle">
                                                                Bandung
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="product-title">Postal Code</div>
                                                            <div className="product-subtitle">123999</div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="product-title">Country</div>
                                                            <div className="product-subtitle">
                                                                Indonesia
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="product-title">Status</div>
                                                                    <select
                                                                        name="status"
                                                                        id="status"
                                                                        className="form-control"
                                                                        v-model="status"
                                                                    >
                                                                        <option value="UNPAID">Unpaid</option>
                                                                        <option value="PENDING">Pending</option>
                                                                        <option value="SHIPPING">Shipping</option>
                                                                        <option value="SUCCESS">Success</option>
                                                                    </select>
                                                                </div>
                                                                <template v-if="status == 'SHIPPING'">
                                                                    <div className="col-md-3">
                                                                        <div className="product-title">
                                                                            Input Resi
                                                                        </div>
                                                                        <input
                                                                            className="form-control"
                                                                            type="text"
                                                                            name="resi"
                                                                            id="openStoreTrue"
                                                                            v-model="resi"
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <button
                                                                            type="submit"
                                                                            className="btn btn-success btn-block mt-4"
                                                                        >
                                                                            Update Resi
                                                                        </button>
                                                                    </div>
                                                                </template>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Transaction
