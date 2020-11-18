import {
  ADD_CLASS,
  DELETE_CLASS,
  FOUND_CLASSES,
  IS_LOADING,
  EDIT_CLASS,
  FAILURE,
} from "../actions/instructorActions";

const initialState = {
  classes: [],
  class: {},
  error: "",
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASS:
      return {
        ...state,
      };
    case DELETE_CLASS:
      return {
        ...state,
      };
    case FOUND_CLASS:
      return {
        ...state,
        isLoading: false,
        classes: res.data,
      };
    case EDIT_CLASS:
      return {
        ...state,
        class: res.data,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        error: res.data,
      };
    default:
      return state;
  }
};
