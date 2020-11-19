import React, { useState } from "react";
import Axios from "axios";

import { useForm } from "../hooks/useForm";

const initialFormVals = {
  username: "",
  password: "",
};

export default function Signin() {
  const [formVals, , handleChange, handleSubmit] = useForm(initialFormVals);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormVals({
  //     ...formVals,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   Axios.post("https://covid-bod.herokuapp.com/api/auth/login", formVals)
  //     .then((res) => {
  //       console.log("Login Successful ==>> ", res);
  //       localStorage.setItem("token", res.data.token);
  //     })
  //     .catch((err) => {
  //       console.log(
  //         "Login Failed ==>> ",
  //         err.message,
  //         " Error Type ==>> ",
  //         err.type
  //       );
  //     });
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={formVals.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formVals.password}
        onChange={handleChange}
      />
      <button>Sign In</button>
    </form>
  );
}
