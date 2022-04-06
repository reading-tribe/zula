import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios"

export interface BookState {
  book: object
}

export interface Book {
  id: string;
  internal_title: string;
  authors: string;
}
export interface CreateBookRequest {
  internal_title: string;
  authors: string;
}

export interface CreateBookResponse {
  id: string;
  internal_title: string;
  authors: string;
}

export interface GetBookResponse {
  id: string;
  internal_title: string;
  authors: string;
}

export interface UpdateBookRequest {
  internal_title: string;
  authors: string;
}

export interface UpdateBookResponse {
  id: string;
  internal_title: string;
  authors: string;
}

export type ListBooksResponse = Book[] | null;

const INITIAL_STATE: BookState = {
  book: {}
};

const {
  reducer,
  actions: { createBookAction, deleteBookAction, getBookAction, getBooksAction, updateBookAction }
} = createSlice({
  name: "book",
  initialState: INITIAL_STATE,
  reducers: {
    updateBookAction: (state, { payload }) => ({
      ...state,
      book: payload.book
    }),
    createBookAction: (state, { payload }) => ({
      ...state,
      book: payload.book
    }),
    getBookAction: (state, { payload }) => ({
      ...state,
      book: payload.book
    }),
    getBooksAction: (state, { payload }) => ({
      ...state,
      book: payload.book
    }),
    deleteBookAction: (state, { payload }) => ({
      ...state,
      book: payload.book,
    }),
  },
});

export const createBook = (book: CreateBookRequest) => async (dispatch: Dispatch) => {
  const response = await axios.post("https://8oufr7mu4f.execute-api.eu-central-1.amazonaws.com/book", book);
  const data = await response.data;
  console.log("response XX#####", data.message);

  dispatch(
    createBookAction({
      id: data.id,
      internal_title: data.title,
      authors: data.authors
    })
  );
};

export const getBook = (book: GetBookResponse) => async (dispatch: Dispatch) => {
  const response = await axios.get(`https://8oufr7mu4f.execute-api.eu-central-1.amazonaws.com/book/${book.id}`);
  const data = await response;
  /*  console.log("response", data.results[0]); */

  dispatch(
    getBookAction({
      book: data
    })
  );
};

export const listBooks = (book: ListBooksResponse) => async (dispatch: Dispatch) => {
  const response = await axios.get("https://8oufr7mu4f.execute-api.eu-central-1.amazonaws.com/book");
  const data = await response.data;

  dispatch(
    getBooksAction({
      book: data
    })
  );
};

export const updateBook = (book: UpdateBookRequest) => async (dispatch: Dispatch) => {
  const response = await axios.patch(`https://8oufr7mu4f.execute-api.eu-central-1.amazonaws.com/book/${book.id}`);
  const data = await response.data;
  /*   console.log("response XX#####", data.message); */

  dispatch(
    updateBookAction({
      id: data.id,
      internal_title: data.title,
      authors: data.authors
    })
  );
};

export const deleteBook = (book: GetBookResponse) => async (dispatch: Dispatch) => {
  const response = await axios.delete(`https://8oufr7mu4f.execute-api.eu-central-1.amazonaws.com/book/${book.id}`);
  const data = await response.data;
  console.log("response XX#####", data.message);

  dispatch(
    deleteBookAction({
      book: data
    })
  );
};

export { createBookAction, deleteBookAction, getBookAction, getBooksAction, updateBookAction };

export default reducer;
