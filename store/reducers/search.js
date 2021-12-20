import { actionTypes } from "../actions/ACTION_TYPES";

export const search = (state = "", action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH:
      return action.payload;

    case actionTypes.CLEAR_SEARCH:
      return "";

    default:
      return state;
  }
};
