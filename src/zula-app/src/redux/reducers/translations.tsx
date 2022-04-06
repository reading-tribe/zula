import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios"

export interface TranslationState {
  translation: object
}

export type Language = string;

export interface Translation {
  id: string;
  book_id: string;
  localised_title: string;
  language: Language;
}

export interface CreateTranslationRequest {
  book_id: string;
  localised_title: string;
  language: string;
}

export interface GetTranslationResponse {
  id: string;
  book_id: string;
  localised_title: string;
  language: Language;
}

export interface UpdateTranslationRequest {
  book_id: string;
  localised_title: string;
  language: string;
}

const INITIAL_STATE: TranslationState = {
  translation: {}
};

const {
  reducer,
  actions: { createTranslationAction, deleteTranslationAction, getTranslationAction, getTranslationsAction, updateTranslationAction }
} = createSlice({
  name: "translation",
  initialState: INITIAL_STATE,
  reducers: {
    updateTranslationAction: (state, { payload }) => ({
      ...state,
      translation: payload.translation
    }),
    createTranslationAction: (state, { payload }) => ({
      ...state,
      translation: payload.translation
    }),
    getTranslationAction: (state, { payload }) => ({
      ...state,
      translation: payload.translation
    }),
    getTranslationsAction: (state, { payload }) => ({
      ...state,
      translation: payload.translation
    }),
    deleteTranslationAction: (state, { payload }) => ({
      ...state,
      translation: payload.translation,
    }),
  },
});

export const createTranslation = (translation: CreateTranslationRequest) => async (dispatch: Dispatch) => {
  const response = await axios.post("https://fgxdnldga8.execute-api.eu-central-1.amazonaws.com/translation", translation);
  const data = await response.data;

  dispatch(
    createTranslationAction({
      id: data.id,
      book_id: data.book_id,
      localised_title: data.localised_title,
      language: data.language,
    })
  );
};

export const getTranslation = (translation: GetTranslationResponse) => async (dispatch: Dispatch) => {
  const response = await axios.get(` https://fgxdnldga8.execute-api.eu-central-1.amazonaws.com/translation/${translation.id}`);
  const data = await response.data;

  dispatch(
    getTranslationAction({
      id: data.id,
      book_id: data.book_id,
      localised_title: data.localised_title,
      language: data.language,
    })
  );
};

export const listTranslations = (translation: Translation) => async (dispatch: Dispatch) => {
  const response = await axios.get("https://8oufr7mu4f.execute-api.eu-central-1.amazonaws.com/translation");
  const data = await response.data;

  dispatch(
    getTranslationsAction({
      translation: data
    })
  );
};

export const updateTranslation = (translation: UpdateTranslationRequest) => async (dispatch: Dispatch) => {
  const response = await axios.patch(`https://fgxdnldga8.execute-api.eu-central-1.amazonaws.com/translation/${translation.book_id}`);
  const data = await response.data;

  dispatch(
    updateTranslationAction({
      id: data.id,
      internal_title: data.title,
      authors: data.authors
    })
  );
};

export const deleteTranslation = (translation: GetTranslationResponse) => async (dispatch: Dispatch) => {
  const response = await axios.delete(`https://fgxdnldga8.execute-api.eu-central-1.amazonaws.com/translation/${translation.id}`);
  const data = await response.data;

  dispatch(
    deleteTranslationAction({
      translation: data
    })
  );
};

export { createTranslationAction, deleteTranslationAction, getTranslationAction, getTranslationsAction, updateTranslationAction };

export default reducer;
