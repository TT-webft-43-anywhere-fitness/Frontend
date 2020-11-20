import types from "../../constants";

export const getClasses = () => {
  return { type: types.GET_CLASSES };
};

export const editClass = (newClass) => {
  return { type: types.EDIT_CLASS, payload: newClass };
};

export const addClass = (newClass) => {
  return { type: types.ADD_CLASS, payload: newClass };
};

export const deleteClass = (classId) => {
  return { type: types.DELETE_CLASS, payload: classId };
};
