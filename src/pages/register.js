import React, { Component } from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from '../services/auth.service'

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vname = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

export class Register extends Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            successful: false,
            message: ""
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
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

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                this.state.name,
                this.state.username,
                this.state.email,
                this.state.password
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
        }
    }

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
                                <Form
                                    className='mt-3'
                                    onSubmit={this.handleRegister}
                                    ref={c => {
                                        this.form = c;
                                    }}
                                >
                                    {!this.state.successful && (
                                        <div>
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name</label>
                                                <Input
                                                    type="text"
                                                    className="form-control is-valid"
                                                    name="name"
                                                    value={this.state.name}
                                                    onChange={this.onChangeName}
                                                    validations={[required, vname]}
                                                    autofocus
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="username">Username</label>
                                                <Input
                                                    type="text"
                                                    className="form-control is-invalid"
                                                    name="username"
                                                    value={this.state.username}
                                                    onChange={this.onChangeUsername}
                                                    validations={[required, vusername]}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <Input
                                                    type="email"
                                                    className="form-control is-invalid"
                                                    aria-describedby="emailHelp"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.onChangeEmail}
                                                    validations={[required, email]}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <Input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.onChangePassword}
                                                    validations={[required, vpassword]}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <button className="btn btn-success btn-block mt-4">Sign Up Now</button>
                                                <button type="submit" className="btn btn-signup btn-block mt-2">Back to Sign In</button>
                                            </div>
                                        </div>
                                    )}

                                    {this.state.message && (
                                        <div className="form-group">
                                            <div
                                                className={
                                                    this.state.successful
                                                        ? "alert alert-success"
                                                        : "alert alert-danger"
                                                }
                                                role="alert"
                                            >
                                                {this.state.message}
                                            </div>
                                        </div>
                                    )}
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
        )
    }
}

export default Register
