import { combineReducers, createStore } from "redux";
import { search } from "./search";

const rootReducer = combineReducers({
  search,
});

export const store = createStore(rootReducer);
