import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Sign In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
  );
}
