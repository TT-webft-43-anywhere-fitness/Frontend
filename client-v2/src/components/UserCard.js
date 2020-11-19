import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function UserCard() {
  const user = useSelector((state) => state.user);

  return (
    <div className="user-card">
      <h2>Welcome back!</h2>
      {console.log(user)}
    </div>
  );
}
