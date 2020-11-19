import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getClasses } from "../store/actions/classesActions";

import Class from "./Class";

export default function ClassList() {
  const classes = useSelector((state) => state.classes);
  const dispatch = useDispatch();

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let date = today.getDate();

  useEffect(() => {
    dispatch(getClasses());
  }, []);

  return (
    <div key="all-available-classes" className="classInfo">
      <div className="titleBar">
        <h3>{` ${month}/${date}/${year} `}</h3>
        <h3>Description</h3>
        <h3>Enrolled</h3>
        <h3>Intensity</h3>
        <h3>Location</h3>
      </div>
      {classes.length > 0 && classes.map((cls) => <Class cls={cls} />)}
    </div>
  );
}
