import {
  FETCH_CLASSES_START,
  FETCH_CLASSES_SUCCESS,
  FETCH_CLASSES_FAILURE,
  ADD_CLASS_START,
  ADD_CLASS_SUCCESS,
  ADD_CLASS_FAILURE,
  EDIT_CLASS_START,
  EDIT_CLASS_SUCCESS,
  EDIT_CLASS_FAILURE,
  DELETE_CLASS_START,
  DELETE_CLASS_SUCCESS,
  DELETE_CLASS_FAILURE,
} from "../__mocks__/actions";

const initialState = {
  classes: [],
  isFetching: false,
  isPosting: false,
  isEditing: false,
  isDeleting: false,
  error: "",
};
const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSES_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        classes: action.payload,
      };
    case FETCH_CLASSES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ADD_CLASS_START:
      return {
        ...state,
        isPosting: true,
      };
    case ADD_CLASS_SUCCESS:
      return {
        ...state,
        isPosting: false,
        classes: action.payload,
      };
    case ADD_CLASS_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.payload,
      };
    case EDIT_CLASS_START:
      return {
        ...state,
        isEditing: true,
      };
    case EDIT_CLASS_SUCCESS:
      return {
        ...state,
        isEditing: false,
        classes: state.classes.map((cls) => {
          if (cls.id === Number(action.payload.id)) {
            return action.payload;
          } else {
            return cls;
          }
        }),
      };
    case EDIT_CLASS_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload,
      };
    case DELETE_CLASS_START:
      return {
        ...state,
        isDeleting: true,
      };
    case DELETE_CLASS_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        classes: state.classes.filter((cls) => cls.id !== action.payload),
      };
    case DELETE_CLASS_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default classesReducer;
