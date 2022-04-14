import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { bookEndpoint } from "./api"

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
  try {
    const response = await bookEndpoint.post("/book", book);
    const data = await response.data;
    console.log("response XX#####", data.message);
    dispatch(
      createBookAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error)
  }
};

export const getBook = (book: GetBookResponse) => async (dispatch: Dispatch) => {
  try {
    const response = await bookEndpoint.get(`/book/${book.id}`);
    const data = await response.data;
    console.log("GETBOOK:", data)
    dispatch(
      getBookAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error)
  }
};

export const listBooks = () => async (dispatch: Dispatch) => {
  try {
    const response = await bookEndpoint.get("/book");
    const data = await response.data;
    console.log("LISTBOOKS:", data)
    dispatch(
      getBooksAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error)
  }
};

export const updateBook = (book: UpdateBookRequest) => async (dispatch: Dispatch) => {
  try {
    const response = await bookEndpoint.patch(`/book/${book.internal_title}`);
    const data = await response.data;
    console.log("UPDATEBOOK:", data)
    dispatch(
      updateBookAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error)
  }
};

export const deleteBook = (book: GetBookResponse) => async (dispatch: Dispatch) => {
  try {
    const response = await bookEndpoint.delete(`/book/${book.id}`);
    const data = await response.data;
    console.log("DELETEBOOK:", data.message);
    dispatch(
      deleteBookAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error)
  }
};

export { createBookAction, deleteBookAction, getBookAction, getBooksAction, updateBookAction };

export default reducer;
