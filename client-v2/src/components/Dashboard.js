import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getClasses,
  getInstructorClasses,
  searchClasses,
  searchClassesTime,
} from "../store/actions/classesActions";

import UserCard from "./UserCard";
import ClassList from "./ClassList";
import ClassForm from "./ClassForm";
import Class from "./Class";

import "../styles/DashboardCSS.css";

const initialFormVals = {
  category: "",
  search: "",
};

export default function Dashboard() {
  const [user, setUser] = useState({});
  const instructorClasses = useSelector(
    (state) => state.classes.instructorClasses
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [formValues, setFormValues] = useState(initialFormVals);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    if (user.role === 2) {
      dispatch(getInstructorClasses(user.id));
    }
  }, []);

  useEffect(() => {
    dispatch(getClasses());
    dispatch(getInstructorClasses(user.id));
  }, [isAdding]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.category === "duration") {
      dispatch(searchClassesTime(formValues.search));
    } else {
      dispatch(searchClasses(formValues));
    }
  };

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
      <form key="customer-search-form" onSubmit={handleSubmit}>
        <select
          name="category"
          value={formValues.category}
          onChange={handleChange}
        >
          <option>Select a Category...</option>
          <option value="start_time">By Time</option>
          <option value="duration">By Duration</option>
          <option value="type">By Type</option>
          <option value="intensity">By Intensity</option>
          <option value="location">By Location</option>
        </select>
        <input
          type="text"
          name="search"
          value={formValues.search}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <ClassList />
    </div>
  );
}
