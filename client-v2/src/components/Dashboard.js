import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getClasses,
  getInstructorClasses,
} from "../store/actions/classesActions";

import UserCard from "./UserCard";
import ClassList from "./ClassList";
import ClassForm from "./ClassForm";
import Class from "./Class";

import "../styles/DashboardCSS.css";

export default function Dashboard() {
  const [user, setUser] = useState({});
  const instructorClasses = useSelector(
    (state) => state.classes.instructorClasses
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    if (user.role === 2) {
      dispatch(getInstructorClasses(user.id));
    }
  }, []);

  useEffect(() => {
    dispatch(getClasses());
  }, [isAdding]);

  return (
    <div className="dashboard">
      <UserCard />
      {!isAdding ? (
        <button
          onClick={(e) => {
            setIsAdding(true);
          }}
        >
          Add Class
        </button>
      ) : (
        <ClassForm
          isAdding={true}
          setIsAdding={setIsAdding}
          instrId={user.id}
        />
      )}
      {user.role === 2 &&
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
