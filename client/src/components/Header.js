import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Header() {
  const { id } = useParams();

  return (
    <div>
      <div></div>
      <ul>
        <Link to="/signup">Sign Up</Link>
        {localStorage.getItem("token") ? (
          <Link to={`/dashboard/${id}`}>Home</Link>
        ) : (
          <Link to="/">Home</Link>
        )}
        {localStorage.getItem("token") ? (
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            Sign Out
          </Link>
        ) : null}
      </ul>
    </div>
  );
}
