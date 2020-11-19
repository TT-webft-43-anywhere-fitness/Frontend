import { AxiosWithAuth } from "../../utils/AxiosWithAuth";

import actions from "../../constants";
import { attendeesActionTypes } from "../../constants";
import { BASE_URL } from "../../constants";

export const getClasses = () => (dispatch) => {
  dispatch({ type: actions.FETCH_CLASSES_START });
  AxiosWithAuth()
    .get(`${BASE_URL}/api/classes`)
    .then((res) => {
      dispatch({ type: actions.FETCH_CLASSES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: actions.FETCH_CLASSES_FAILURE, payload: err.message });
    });
};

export const addClass = (newClass) => (dispatch) => {
  dispatch({ type: actions.ADD_CLASS_START });
  AxiosWithAuth()
    .post(`${BASE_URL}/api/classes`, newClass)
    .then((res) => {
      dispatch({ type: actions.ADD_CLASS_SUCCESS, payload: res.data });
    })
    .catch((err) => [
      dispatch({ type: actions.ADD_CLASS_FAILURE, payload: err.message }),
    ]);
};

export const editClass = (classId, newClass) => (dispatch) => {
  dispatch({ type: actions.EDIT_CLASS_START });
  AxiosWithAuth()
    .put(`${BASE_URL}/api/classes/${classId}`, newClass)
    .then((res) => {
      dispatch({ type: actions.EDIT_CLASS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: actions.EDIT_CLASS_FAILURE, payload: err.message });
    });
};

export const deleteClass = (classId) => (dispatch) => {
  dispatch({ type: actions.DELETE_CLASS_START });
  AxiosWithAuth()
    .delete(`${BASE_URL}/api/classes/${classId}`)
    .then((res) => {
      dispatch({ type: actions.DELETE_CLASS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: actions.DELETE_CLASS_FAILURE, payload: err.message });
    });
};
