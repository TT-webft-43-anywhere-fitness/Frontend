import { attendeesActionTypes } from "../../constants";

const initialState = {
  attendees: [],
  isFetching: false,
  isEnrolling: false,
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
    case attendeesActionTypes.ENROLL_IN_CLASS_START:
      return {
        ...state,
        isEnrolling: true,
      };
    case attendeesActionTypes.ENROLL_IN_CLASS_SUCCESS:
      return {
        ...state,
        isEnrolling: false,
        attendees: action.payload,
      };
    case attendeesActionTypes.ENROLL_IN_CLASS_FAILURE:
      return {
        ...state,
        isEnrolling: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default attendeesReducer;
