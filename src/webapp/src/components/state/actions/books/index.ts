import { ActionType } from "../../actions-types";

interface searchBooks {
  type: ActionType.SEARCH_BOOKS;
}

interface searchBooksSuccess {
  type: ActionType.SEARCH_BOOKS_SUCCESS;
  payload: string[];
}

interface searchBooksError {
  type: ActionType.SEARCH_BOOKS_ERROR;
  payload: string;
}

export type Action = searchBooks | searchBooksSuccess | searchBooksError;
