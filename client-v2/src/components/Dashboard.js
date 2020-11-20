import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import UserCard from "./UserCard";
import ClassList from "./ClassList";
import Class from "./Class";

import "../styles/DashboardCSS.css";

export default function Dashboard() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="dashboard">
      <UserCard />
      <ClassList />
    </div>
  );
}
