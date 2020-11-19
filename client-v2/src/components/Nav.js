import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Sign In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      {localStorage.getItem("token") && (
        <NavLink
          to="/"
          onClick={() => {
            localStorage.removeItem("token");
          }}
        >
          Sign Out
        </NavLink>
      )}
    </nav>
  );
}
