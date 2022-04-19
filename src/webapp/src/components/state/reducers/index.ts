import { combineReducers } from "redux";
import booksReducer from "./books";
import authReducer from "./auth";

const allReducers = combineReducers({
  books: booksReducer,
  auth: authReducer,
});

export default allReducers;

// Applying types to React/Redux
export type RootState = ReturnType<typeof allReducers>;
