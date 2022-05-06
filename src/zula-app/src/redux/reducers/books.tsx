import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { api} from "./api"

export interface BookState {
  book: object
}

export interface BookListState {
  book: BookState[]
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
    const response = await api.post("/8oufr7mu4f.execute-api.eu-central-1.amazonaws.com/book", book);
    const data = await response.data;
    console.log("response XX#####", data);
    dispatch(
      createBookAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error.response.data)
  }
};

export const getBook = (book: GetBookResponse) => async (dispatch: Dispatch) => {
  try {
    const response = await api.get(`/8oufr7mu4f.execute-api.eu-central-1.amazonaws.com/book/${book.id}`);
    const data = await response.data;
    console.log("GETBOOK:", data)
    dispatch(
      getBookAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error.response.data)
  }
};

export const listBooks = () => async (dispatch: Dispatch) => {
  try {
    const response = await api.get("/8oufr7mu4f.execute-api.eu-central-1.amazonaws.com/book");
    const data = await response.data;
    console.log("LISTBOOKS:", data)
    dispatch(
      getBooksAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error.response.data)
  }
};

export const updateBook = (book: UpdateBookRequest) => async (dispatch: Dispatch) => {
  try {
    const response = await api.put(`/8oufr7mu4f.execute-api.eu-central-1.amazonaws.com/book/${book.internal_title}`);
    const data = await response.data;
    console.log("UPDATEBOOK:", data)
    dispatch(
      updateBookAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error.response.data)
  }
};

export const deleteBook = (book: GetBookResponse) => async (dispatch: Dispatch) => {
  try {
    const response = await api.delete(`/8oufr7mu4f.execute-api.eu-central-1.amazonaws.com/book/${book.id}`);
    const data = await response.data;
    console.log("DELETEBOOK:", data.message);
    dispatch(
      deleteBookAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error.response.data)
  }
};

export { createBookAction, deleteBookAction, getBookAction, getBooksAction, updateBookAction };

export default reducer;
