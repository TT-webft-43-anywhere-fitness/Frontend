import React from "react";

import { useForm } from "../hooks/useForm";

const initialFormVals = {
  username: "",
  password: "",
};

export default function Signin() {
  const [formVals, , handleChange, handleSubmit] = useForm(initialFormVals);

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
