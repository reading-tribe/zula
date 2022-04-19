import { ActionType } from "../actions-types";
import { Action } from "../actions/books";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

interface State {
  loading: boolean;
  error: string | null;
  data: String[];
}

const booksReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SEARCH_BOOKS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_BOOKS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_BOOKS_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default booksReducer;
