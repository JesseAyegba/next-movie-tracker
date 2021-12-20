import { actionTypes } from "./ACTION_TYPES";

export const setSearch = (search) => {
  return {
    type: actionTypes.SET_SEARCH,
    payload: search,
  };
};

export const clearSearch = () => {
  return {
    type: actionTypes.CLEAR_SEARCH,
  };
};
