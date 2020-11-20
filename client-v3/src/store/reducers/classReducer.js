import types from "../../constants";
import AxiosWithAuth from "../../utils/AxiosWithAuth;";

const initialState = {
  classes: [],
  class: {
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
  },
  isFetching: false,
};

function classReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CLASSES:
      return {
        ...state,
      };
    case types.POST_CLASS:
      return {
        ...state,
        classes: action.payload,
      };
    case types.PUT_CLASS:
      return {
        ...state,
      };
    case types.DELETE_CLASS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
