import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import customerActions from "../actions/customerActions";
import instructorActions from "../actions/instructorActions";

import EditingClass from "../components/EditingClass";

const initialValues = {
  selector: "",
  search: "",
};

const initialAddValues = {
  class_name: "",
  type: "",
  start_time: "",
  end_time: "",
  intensity: "",
  location: "",
  enrolled: 0,
  max_size: "",
};

const initialEditingValues = {
  class_name: "",
  type: "",
  start_time: "",
  end_time: "",
  intensity: "",
  location: "",
  enrolled: "",
  max_size: "",
};
// enroll/unenroll user_id in endpoint path, class_id in bodyobj
export default function Dashboard() {
  const { id } = useParams();
  // useSelector to pull user details from reducer
  // useSelector to pull user's classes list from reducer
  // useSelector to pull available classes list from reducer
  const customer = useSelector((state) => state.customer);
  const instructor = useSelector((state) => state.instructor);
  const [classes, setClasses] = useState(customer.classes);
  const dispatch = useDispatch();
  // useState for search form
  const [formValues, setFormValues] = useState(initialValues);
  const [editingValues, setEditingValues] = useState(initialEditingValues);
  const [addValues, setAddValues] = useState(initialAddValues);
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // fetchUserInfo fn to make api call and send resp as a payload to reducer
  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${id}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      });
    dispatch(customerActions.getClasses());
    dispatch(instructorActions.findingClasses(user.id));
  }, []);

  const fetchClassEdit = (id) => {
    axiosWithAuth()
      .get(`/api/classes/${id}`)
      .then((res) => {
        setEditingValues(res.data);
      })
      .catch((err) => {
        console.log("Get Class('Editing') ==>> ", err.message, err.type);
      });
  };

  // fetchAvailableClasses fn to make api call and send resp as a payload
  //// to reducer

  // clickListener for delete api call for instructor classes

  // clickListener for cancel isAttending api call for customer

  // clickListener for setting isAttending api call for customer

  // changeHandler fn for search
  const handleSubmit = (e) => {
    e.preventDefault();
    setClasses(
      classes.filter((cls) => {
        return cls[formValues.category]
          .toLowerCase()
          .includes(formValues.search.toLowerCase());
      })
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setAddValues({
      ...addValues,
      [name]: value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newAdd = {
      ...addValues,
      intensity: Number(addValues.intensity),
      max_size: Number(addValues.max_size),
      instructor_id: user.id,
    };
    dispatch(instructorActions.addClass(newAdd));
    setAddValues(initialEditingValues);
  };

  return (
    <div>
      {/* need user id */}
      {/* display user details */}
      {/* conditionally render add/edit classform if optionType is
        instructor */}
      {/* needs an element to click and delete class which will
          have an onClick handler to run a delete req to api with the
          id of the class(this might need to be in Class component) */}
      {/* map over classes and render Class component for each one */}
      {/* needs a button for editing */}
      {/* conditionally render list of classes if optionType is
        customer */}
      {/* map over classes and render Class component for each one */}
      {/* needs an input element for search input with onChange handler;
          this couold be a separate search component */}
      {/* map over availableClasses and render Class component for each one */}
      {/* needs to be an element with click listener that sends put request to api
            to cancel isAttending(might conflate this and below elements to one toggle) */}
      {/* also need an element with click listener that sends put request to api
            to confirm isAttending(might conflate this and above elements to one toggle) */}
      {/* also might need a clear search that sends action to reducer to refetch
          classlist */}
      Dashboard
      {/* addClass form */}
      {user.role === 2 && (
        <form onSubmit={handleAdd}>
          <label htmlFor="class_name">Name</label>
          <input
            type="text"
            name="class_name"
            onChange={handleAddChange}
            value={addValues.name}
          />
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            onChange={handleAddChange}
            value={addValues.type}
          />
          <label htmlFor="start_time">Start Time</label>
          <input
            type="time"
            name="start_time"
            onChange={handleAddChange}
            value={addValues.start_time}
          />
          <label htmlFor="end_time">End Time</label>
          <input
            type="time"
            name="end_time"
            onChange={handleAddChange}
            value={addValues.edit_time}
          />
          <label htmlFor="intensity">Intensity</label>
          <input
            type="text"
            name="intensity"
            onChange={handleAddChange}
            value={addValues.intensity}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            onChange={handleAddChange}
            value={addValues.location}
          />
          <label htmlFor="max_size">Max Class Size</label>
          <input
            type="text"
            name="max_size"
            onChange={handleAddChange}
            value={addValues.max_size}
          />
          <button>Add Class</button>
        </form>
      )}
      {/* editClass Form */}
      {/* {user.role === 2 &&
        instructor.classes.map((cls) => (
          <EditingClass
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            cls={cls}
            handleChange={handleChange}
            editingValues={editingValues}
          />
        ))} */}
      {/* Search form */}
      <form onSubmit={handleSubmit}>
        <select
          name="category"
          value={formValues.category}
          onChange={handleChange}
        >
          <option>Select a Category...</option>
          <option name="start_time">By Time</option>
          <option name="duration">By Duration</option>
          <option name="type">By Type</option>
          <option name="intensity">By Intensity</option>
          <option name="location">By Location</option>
        </select>
        <input
          type="text"
          name="search"
          value={formValues.search}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      {/* list of all available */}
    </div>
  );
}
