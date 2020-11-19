import React from "react";
import { useDispatch } from "react-redux";

import editClass from "../actions/instructorActions";

export default function EditingClass({
  isEditing,
  setIsEditing,
  cls,
  handleChange,
  editingValues,
}) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editClass(cls.id, cls));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={editingValues.name}
          />
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            onChange={handleChange}
            value={editingValues.type}
          />
          <label htmlFor="start_time">Start Time</label>
          <input
            type="text"
            name="start_time"
            onChange={handleChange}
            value={editingValues.start_time}
          />
          <label htmlFor="end_time">End Time</label>
          <input
            type="text"
            name="end_time"
            onChange={handleChange}
            value={editingValues.edit_time}
          />
          <label htmlFor="intensity">Intensity</label>
          <input
            type="text"
            name="intensity"
            onChange={handleChange}
            value={editingValues.intensity}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={editingValues.location}
          />
          <label htmlFor="enrolled">Enrolled</label>
          <input
            type="text"
            name="enrolled"
            onChange={handleChange}
            value={editingValues.enrolled}
          />
          <label htmlFor="max_size">Max Class Size</label>
          <input
            type="text"
            name="max_size"
            onChange={handleChange}
            value={editingValues.max_size}
          />
          <button>Submit Change</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <div className="classDetails">
          <h3>{`${cls.start_time} - ${cls.end_time}`}</h3>
          <h3>{cls.class_name}</h3>
          <h3>{`${cls.enrolled} of ${cls.max_size}`}</h3>
          <h3>{cls.intensity}</h3>
          <h3>{cls.location}</h3>
        </div>
      )}
    </div>
  );
}
