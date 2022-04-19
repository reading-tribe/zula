import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../../actions-types";
import { Action } from "../../actions/books";

export const getBooks = (/*trem: stirng*/) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_BOOKS,
    });
    try {
      const { data } = await axios.get(
        "" /* params:{
        text: term }*/
      );
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_BOOKS_ERROR,
        payload: err.message,
      });
    }
  };
};
