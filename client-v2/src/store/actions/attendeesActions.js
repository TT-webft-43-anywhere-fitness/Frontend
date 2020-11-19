import { AxiosWithAuth } from "../../utils/axiosWithAuth";

export const getAttendees = (classId) => (dispatch) => {
  dispatch({ type: attendeesActionTypes.FETCH_ATTENDEES_START });
  AxiosWithAuth()
    .get(`${BASE_URL}/api/classes/${classId}/attendees`)
    .then((res) => {
      dispatch({
        type: attendeesActionTypes.FETCH_ATTENDEES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: attendeesActionTypes.FETCH_ATTENDEES_FAILURE,
        payload: err.message,
      });
    });
};

export const enrollInClass = (classId, userId) => (dispatch) => {
  dispatch({ type: attendeesActionTypes.ENROLL_IN_CLASS_START });
  AxiosWithAuth()
    .post(`${BASE_URL}/classes/${classId}/attendees`, userId)
    .then((res) => {
      dispatch({
        type: attendeesActionTypes.ENROLL_IN_CLASS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: attendeesActionTypes.ENROLL_IN_CLASS_FAILURE,
        payload: err.message,
      });
    });
};
