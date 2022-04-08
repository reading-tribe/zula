import axiso from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../actions-types";
import { Action } from "../actions/books";

export const getBooks = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_BOOKS,
    });
    try {
      const { data } = await axiso.get("");
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_BOOKS_ERROR,
        payload: error.message,
      });
    }
  };
};
