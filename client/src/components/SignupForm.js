import React, { Component } from "react";
import Axios from "axios";

import { login } from "../api/login";
import { signup } from "../api/signup";

import Toggle from "./Toggle";

const initialState = {
  username: "",
  password: "",
  role: false,
};

export default class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      formValues: initialState,
    };
  }

  handleChange = (e) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleRoleChange = (checked) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        role: checked,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...this.state.formValues,
      role: this.state.formValues.role ? 2 : 1,
    };
    // Axios.post("https://covid-bod.herokuapp.com/api/auth/register", newUser)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    signup(newUser)
      .then((res) => {
        console.log("Signup Successful ==>> ", res);
      })
      .catch((err) => {
        console.log("Signup Failed ==>> ", err.message);
      });
    delete newUser["role"];
    login(newUser)
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
        <label htmlFor="instructor">Are you an Instructor?</label>
        <Toggle
          id="instructor"
          checked={this.state.formValues.role}
          onChange={this.handleRoleChange}
          optionLabels={["Yes", "No"]}
        />
        <button>Sign Up</button>
      </form>
    );
  }
}
