import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/users";
import bookReducer from "./reducers/books";
import translationReducer from "./reducers/translations"

const rootReducer = combineReducers({
  user: userReducer,
  book: bookReducer,
  translations: translationReducer
})

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
