import React from "react";

import { useForm } from "../hooks/useForm";

import Toggle from "./Toggle";
import App from "../App";

const initialFormValues = {
  username: "",
  password: "",
  role: "",
};

export default function Signup() {
  const [formVals, setFormVals, handleChange, handleSubmit] = useForm(
    initialFormValues
  );

  const handleRoleChange = (checked) => {
    setFormVals({
      ...formVals,
      role: checked,
    });
  };

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
      <label htmlFor="role">Are you an Instructor?</label>
      <Toggle
        id="instructor"
        name="instructor"
        checked={formVals.role}
        onChange={handleRoleChange}
      />
      <button>Sign In</button>
    </form>
  );
}
