import { attendeesActionTypes } from "../../constants";

const initialState = {
  attendees: [],
  isFetching: false,
  error: "",
};

const attendeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case attendeesActionTypes.FETCH_ATTENDEES_START:
      return {
        ...state,
        isFetching: true,
      };
    case attendeesActionTypes.FETCH_ATTENDEES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        attendees: action.payload,
      };
    case attendeesActionTypes.FETCH_ATTENDEES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default attendeesReducer;
