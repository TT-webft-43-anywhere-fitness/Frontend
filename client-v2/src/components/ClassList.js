import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getClasses,
  getInstructorClasses,
} from "../store/actions/classesActions";

import Class from "./Class";
import EditingClass from "./EditingClass";

export default function ClassList() {
  const [user, setUser] = useState({});
  const classes = useSelector((state) => state.classes);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const { role } = useParams;

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let date = today.getDate();

  useEffect(() => {
    dispatch(getClasses());
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    if (user.role === 2) {
      dispatch(getInstructorClasses(user.id));
    }
  }, [user]);

  return (
    <div key="all-available-classes" className="classInfo">
      <div className="titleBar">
        <h3>{` ${month}/${date}/${year} `}</h3>
        <h3>Description</h3>
        <h3>Enrolled</h3>
        <h3>Intensity</h3>
        <h3>Location</h3>
      </div>
      {/* {user.role == 2
        ? classes.classes.map((cls) => <Class cls={cls} mutable={true} />)
        : classes.classes.map((cls) => <Class key={cls.id} cls={cls} />)} */}
      {classes.classes.map((cls) => (
        <Class key={cls.id} cls={cls} />
      ))}
    </div>
  );
}
