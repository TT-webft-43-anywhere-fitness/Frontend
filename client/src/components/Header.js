import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Header() {
  const { id } = useParams();

  return (
    <div>
      <div></div>
      <ul>
        <Link to="/">Home</Link>
        {localStorage.getItem("id") ? (
          <Link to={`/dashboard/${localStorage.getItem("id")}`}>Dashboard</Link>
        ) : null}
        <Link to="/signup">Sign Up</Link>
        {localStorage.getItem("token") ? (
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("id");
            }}
          >
            Sign Out
          </Link>
        ) : null}
      </ul>
    </div>
  );
}
