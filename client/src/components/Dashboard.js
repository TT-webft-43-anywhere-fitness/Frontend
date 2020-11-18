import React from "react";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { role, id } = useParams();
  // useSelector to pull user details from reducer
  // useSelector to pull user's classes list from reducer
  // useSelector to pull available classes list from reducer
  // useState for search form

  // fetchUserClasses fn to make api call and send resp as a payload
  //// to reducer

  // fetchAvailableClasses fn to make api call and send resp as a payload
  //// to reducer

  // fetchUserInfo fn to make api call and send resp as a payload to reducer

  // clickListener for delete api call for instructor classes

  // clickListener for cancel isAttending api call for customer

  // clickListener for setting isAttending api call for customer

  // changeHandler fn for search

  // submitHandler fn to send action to reducer for filtering class list for customer

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
    </div>
  );
}
