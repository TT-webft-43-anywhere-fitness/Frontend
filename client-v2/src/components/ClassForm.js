import React from "react";

import { useForm } from "../hooks/useForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormVals = {
  id: "",
  class_name: "",
  type: "",
  start_time: "",
  end_time: "",
  intensity: "",
  location: "",
  enrolled: 0,
  max_size: "",
  instructor_id: "",
};

export default function ClassForm({ isAdding, isEditing }) {
  const [formVals, setFormVals, handleChange] = useForm(initialFormVals);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdding) {
      return null;
    } else if (isEditing) {
      return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="class_name">Class Name</label>
      <input
        type="text"
        name="class_name"
        value={formVals.class_name}
        onChange={handleChange}
      />
      <label htmlFor="type">Class Type</label>
      <input
        type="text"
        name="type"
        value={formVals.type}
        onChange={handleChange}
      />
      <label htmlFor="start_time">Start Time</label>
      <input
        type="time"
        name="start_time"
        value={formVals.start_time}
        onChange={handleChange}
      />
      <label htmlFor="end_time">End Time</label>
      <input
        type="time"
        name="end_time"
        value={formVals.end_time}
        onChange={handleChange}
      />
      <label htmlFor="intensity">Intensity</label>
      <input
        type="number"
        name="intensity"
        value={formVals.intensity}
        onChange={handleChange}
        min="0"
        max="10"
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        value={formVals.location}
        onChange={handleChange}
      />
      <label htmlFor="max_size">Max Class Size</label>
      <input
        type="number"
        name="max_size"
        value={formVals.max_size}
        onChange={handleChange}
        min="0"
        max="50"
      />
      <button>Submit</button>
    </form>
  );
}

ClassForm.defaultProps = {
  isAdding: false,
  isEditing: false,
};
