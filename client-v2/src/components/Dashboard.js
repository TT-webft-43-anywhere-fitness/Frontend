import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import UserCard from "./UserCard";
import ClassList from "./ClassList";
import Class from "./Class";

import "../styles/DashboardCSS.css";

export default function Dashboard() {
  const state = useSelector((state) => state);

  return (
    <div className="dashboard">
      <UserCard />
      <ClassList />
    </div>
  );
}
