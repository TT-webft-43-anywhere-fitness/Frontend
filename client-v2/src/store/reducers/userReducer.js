import { userActionTypes } from "../../constants";

const initialState = {
  user: {},
  isFetching: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.FETCH_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case userActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
      };
    case userActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
