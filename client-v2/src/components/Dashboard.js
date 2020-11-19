import React, { useState } from "react";
import { useSelector } from "react-redux";

import UserCard from "./UserCard";
import ClassList from "./ClassList";
import ClassForm from "./ClassForm";
import Class from "./Class";

import "../styles/DashboardCSS.css";

export default function Dashboard() {
  const instructorClasses = useSelector((state) => state.instructorClasses);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="dashboard">
      <UserCard />
      {JSON.parse(localStorage.getItem("user")).role === 2 &&
        instructorClasses.length > 0 &&
        instructorClasses.map((cls) => {
          return !isEditing ? (
            <Class cls={cls} setIsEditing={setIsEditing} mutable={true} />
          ) : (
            <ClassForm
              isEditing={isEditing}
              isAdding={isAdding}
              classDetails={cls}
            />
          );
        })}
      <ClassList />
    </div>
  );
}
