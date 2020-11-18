import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import classesReducer from "../reducers/classesReducer";
import attendeesReducer from "../reducers/attendeesReducer";
import customerReducer from "../reducers/customerReducer";
import instructorReducer from "../reducers/instructorReducer";

export const middlewares = [thunk, logger];

export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(
  createStore
);

export const rootReducer = combineReducers({
  customer: customerReducer,
  instructor: instructorReducer,
  // classes: classesReducer,
  // attendees: attendeesReducer,
});

const store = createStoreWithMiddlewares(rootReducer);

export default store;
