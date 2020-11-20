import React from "react";
import { useDispatch } from "react-redux";
import { deleteClass } from "../store/actions/classesActions";
import { editClass } from "../store/actions/classesActions";

export default function EditingClass({
  isEditing,
  setIsEditing,
  cls,
  handleChange,
  editingValues,
  setEditingValues,
  isDeleting,
  setIsDeleting,
}) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editClass(cls.id, editingValues));
    setIsEditing(false);
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
          <label htmlFor="class_name">Name</label>
          <input
            type="text"
            name="class_name"
            onChange={handleChange}
            value={editingValues.class_name}
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
            type="time"
            name="start_time"
            onChange={handleChange}
            value={editingValues.start_time}
          />
          <label htmlFor="end_time">End Time</label>
          <input
            type="time"
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
          <button
            onClick={() => {
              dispatch(deleteClass(cls.id));
              // setIsDeleting(!isDeleting);
            }}
          >
            X
          </button>
          <h3>{`${cls.start_time} - ${cls.end_time}`}</h3>
          <h3>{cls.class_name}</h3>
          <h3>{`${cls.enrolled} of ${cls.max_size}`}</h3>
          <h3>{cls.intensity}</h3>
          <h3>{cls.location}</h3>
          {!isEditing && (
            <button
              onClick={() => {
                // setIsEditing(true);
                setEditingValues(cls);
              }}
            >
              Edit
            </button>
          )}
        </div>
      )}
    </div>
  );
}
