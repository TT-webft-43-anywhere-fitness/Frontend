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

const instructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASS:
      return {
        ...state,
        classes: state.classes.concat(action.payload),
      };
    case DELETE_CLASS:
      return {
        ...state,
        classes: state.classes.filter(
          (cls) => Number(cls.id) !== Number(action.payload)
        ),
      };
    case FOUND_CLASSES:
      return {
        ...state,
        isLoading: false,
        classes: action.payload,
      };
    case EDIT_CLASS:
      console.log(action.payload);
      return {
        ...state,
        class: action.payload,
        classes: state.classes.map((cls) => {
          if (cls.id == action.payload) {
            return action.payload;
          }
          return cls;
        }),
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
        error: action.payload,
      };
    default:
      return state;
  }
};

export default instructorReducer;
