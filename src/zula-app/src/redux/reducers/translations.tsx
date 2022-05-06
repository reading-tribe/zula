import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { api } from "./api"

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
      translation: payload
    }),
    createTranslationAction: (state, { payload }) => ({
      ...state,
      translation: payload
    }),
    getTranslationAction: (state, { payload }) => ({
      ...state,
      translation: payload
    }),
    getTranslationsAction: (state, { payload }) => ({
      ...state,
      translation: payload
    }),
    deleteTranslationAction: (state, { payload }) => ({
      ...state,
      translation: payload,
    }),
  },
});

export const createTranslation = (translation: CreateTranslationRequest) => async (dispatch: Dispatch) => {
  try {
    const response = await api.post("/fgxdnldga8.execute-api.eu-central-1.amazonaws.com/translation", translation);
    const data = await response.data;
    console.log("CREATE TRANSLATION RESPONSE:", data)
    dispatch(
      createTranslationAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error.response.data)
  }
};

export const getTranslation = (translation: GetTranslationResponse) => async (dispatch: Dispatch) => {
  try {
    const response = await api.get(`/fgxdnldga8.execute-api.eu-central-1.amazonaws.com/translation/${translation.id}`);
    const data = await response.data;
    console.log("GET TRANSLATION RESPONSE:", data)
    dispatch(
      getTranslationAction({
        id: data.id,
        book_id: data.book_id,
        localised_title: data.localised_title,
        language: data.language,
      })
    );
  } catch (error) {
    console.log(error.response.data)
  }
};

export const listTranslations = () => async (dispatch: Dispatch) => {
  try {
    const response = await api.get("/fgxdnldga8.execute-api.eu-central-1.amazonaws.com/translation");
    const data = await response.data;
    console.log("TRANSLATIONSLIST RESPONSE:", data)
    dispatch(
      getTranslationsAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error.response.data)
  }
};

export const updateTranslation = (translation: UpdateTranslationRequest) => async (dispatch: Dispatch) => {
  try {
    const response = await api.patch(`/fgxdnldga8.execute-api.eu-central-1.amazonaws.com/translation/${translation.book_id}`);
    const data = await response.data;
    console.log("UPDATE TRANSLATION RESPONSE:", data)
    dispatch(
      updateTranslationAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error.response.data)
  }
};

export const deleteTranslation = (translation: Translation) => async (dispatch: Dispatch) => {
  try {
    const response = await api.delete(`/fgxdnldga8.execute-api.eu-central-1.amazonaws.com/translation/${translation.id}`);
    const data = await response.data;
    console.log("DELETE TRANSLATION RESPONSE:", data)
    dispatch(
      deleteTranslationAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error.response.data)
  }
};

export { createTranslationAction, deleteTranslationAction, getTranslationAction, getTranslationsAction, updateTranslationAction };

export default reducer;
