import {
  GET_CLASSES,
  IS_LOADING,
  FAILURE,
  IS_ATTENDING,
} from "../actions/customerActions";

const initialState = {
  classes: [],
  isAttending: false,
  isLoading: false,
  error: "",
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLASSES:
      return {
        ...state,
        classes: action.payload,
        isLoading: false,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case IS_ATTENDING:
      return {
        ...state,
        isAttending: res.data,
      };
    default:
      return state;
  }
};

export default customerReducer;
