import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  deleteClass,
  getInstructorClasses,
} from "../store/actions/classesActions";

export default function Class({ cls, mutable, setIsEditing = null }) {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    dispatch(getInstructorClasses(JSON.parse(localStorage.getItem("user")).id));
  }, [isDeleting]);

  return (
    <div className="classDetails">
      {mutable && (
        <button
          onClick={() => {
            dispatch(deleteClass(cls.id));
            setIsDeleting(!isDeleting);
          }}
        >
          X
        </button>
      )}
      <h3>{`${cls.start_time} - ${cls.end_time}`}</h3>
      <h3>{cls.class_name}</h3>
      <h3>{`${cls.enrolled} of ${cls.max_size}`}</h3>
      <h3>{cls.intensity}</h3>
      <h3>{cls.location}</h3>
      {mutable && (
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      )}
    </div>
  );
}

Class.defaultProps = {
  mutable: false,
};
