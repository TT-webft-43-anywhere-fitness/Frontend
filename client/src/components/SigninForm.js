import React, { Component } from "react";
import { login } from "../api/login";
import axios from "axios";
import Toggle from "./Toggle";

const initialState = {
  username: "",
  password: "",
  instructor: false,
};

export default class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: initialState,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formValues: {
        ...this.state.formValues,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    login(this.state.formValues)
      .then((res) => {
        console.log("Login Successful ==>> ", res);
        localStorage.setItem("token", res.data.payload);
        localStorage.setItem("role", res.data.role);
        this.props.history.push(`/dashboard/${res.data.id}`);
      })
      .catch((err) => {
        alert(`Failed to Log In ==>> ${err.message}`);
        console.log("Login Failed ==>> ", err.message);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.formValues.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.formValues.password}
          onChange={this.handleChange}
        />
        <button>Sign In</button>
      </form>
    );
  }
}
