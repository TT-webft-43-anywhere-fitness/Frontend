import React from "react";
import { useDispatch } from "react-redux";

import { deleteClass } from "../store/actions/classesActions";

export default function Class({ cls, mutable }) {
  const dispatch = useDispatch();
  return (
    <div className="classDetails">
      {mutable && (
        <button
          onClick={() => {
            dispatch(deleteClass(cls.id));
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
    </div>
  );
}

Class.defaultProps = {
  mutable: false,
};
