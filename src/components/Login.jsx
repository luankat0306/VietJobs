import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "../css/LoginPage.css";
import AuthService from "../services/AuthService";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            message: "",
        };
        this.login = this.login.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    login(e) {
        e.preventDefault();
        AuthService.login(this.state.username, this.state.password);
    }

    handleUsername(e) {
        this.setState({ username: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <div className="login-page">
                <div className="formLogin">
                    <Form onSubmit={this.login}>
                        <h2>Admin Login</h2>

                        <div className="input-group">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                onChange={this.handleUsername}
                                required
                            />
                            <label for="username">Username</label>
                        </div>

                        <div className="input-group">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={this.handlePassword}
                                required
                            />
                            <label for="password">Password</label>
                        </div>

                        <button name="submit">Login</button>
                    </Form>
                </div>
            </div>
        );
    }
}
