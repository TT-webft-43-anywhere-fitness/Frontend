import {
  FETCH_ATTENDEES_START,
  FETCH_ATTENDEES_SUCCESS,
  FETCH_ATTENDEES_FAILURE,
} from "../__mocks__/actions";

const initialState = {
  attendees: [],
  isFetching: false,
  error: "",
};

const attendeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ATTENDEES_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ATTENDEES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        attendees: action.payload,
      };
    case FETCH_ATTENDEES_FAILURE:
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
