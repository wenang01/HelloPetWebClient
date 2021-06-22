import React, { Component } from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { Link } from "react-router-dom";

import AuthService from "../services/auth.service";

// const required = value => {
//     if (!value) {
//         return (
//             // alert("Please Input Email And Password")
//             <span className="alert alert-danger" role="alert">
//                 This field is required!
//             </span>
//         );
//     }
// };

export class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.email, this.state.password).then(
                () => {
                    this.props.history.push("/");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (
            <div>
                {/* <!-- Page Content --> */}
                <div className="page-content page-auth">
                    <div className="section-store-auth" data-aos="fade-up">
                        <div className="container">
                            <div className="row align-items-center row-login">
                                <div className="col-lg-6 text-center">
                                    <img src="/images/login-placeholder.png" alt="" className="w-50 mb-4 mb-lg-none" />
                                </div>
                                <div className="col-lg-5">
                                    <h2>Sign in to start your session</h2>
                                    {this.state.message && (
                                        <div className="form-group">
                                            <div className="alert alert-danger" role="alert">
                                                {this.state.message}
                                            </div>
                                        </div>
                                    )}
                                    <Form className="mt-3"
                                        onSubmit={this.handleLogin}
                                        ref={c => {
                                            this.form = c;
                                        }}
                                    >
                                        <div className="form-group">
                                            <label>Email address</label>
                                            <Input
                                                type="email"
                                                className="form-control w-75"
                                                aria-describedby="emailHelp"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.onChangeEmail}
                                            // validations={[required]}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <Input
                                                type="password"
                                                className="form-control w-75"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.onChangePassword}
                                            // validations={[required]}
                                            />
                                        </div>

                                        <button
                                            className="btn btn-block w-75 mt-4"
                                            disabled={this.state.loading}
                                            style={{ backgroundColor: '#0664A8', color: 'white' }}
                                        >
                                            <span>Sign In to My Account</span>
                                            {this.state.loading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )}
                                        </button>
                                        <Link className="btn btn-signup w-75 mt-2" to="/register.html">
                                            Sign Up
                                        </Link>
                                        <CheckButton
                                            style={{ display: "none" }}
                                            ref={c => {
                                                this.checkBtn = c;
                                            }}
                                        />
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login