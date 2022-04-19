import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { userEndpoint } from "./api"

export interface UserState {
  user: object
}

export interface RegisterRequest {
  emailAddress: string;
  password: string;
}

export interface LoginRequest {
  emailAddress: string;
  password: string;
}

const INITIAL_STATE: UserState = {
  user: {}
};

const {
  reducer,
  actions: { createUserAction, updateUserAction, getUserAction, loginUserAction }
} = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    updateUserAction: (state, { payload }) => ({
      ...state,
      user: payload
    }),
    createUserAction: (state, { payload }) => ({
      ...state,
      user: payload
    }),
    getUserAction: (state, { payload }) => ({
      ...state,
      user: payload
    }),
    loginUserAction: (state, { payload }) => ({
      ...state,
      user: payload
    }),
  },
});

export const createUser = (user: RegisterRequest) => async (dispatch: Dispatch) => {
  try {
    const response = await userEndpoint.post("/auth/register", user);
    const data = await response.data;
    dispatch(
      createUserAction({
        payload: data.message
      })
    );
  } catch (error) {
    console.log(error)
  }
};

export const getUser = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];
    dispatch(
      getUserAction({
        payload: user
      })
    );
  } catch (error) {
    console.log(error)
  }
};

export const loginUser = (user: LoginRequest) => async (dispatch: Dispatch) => {
  try {
    const response = await userEndpoint.post("/auth/login", user);
    const data = await response.data;
    dispatch(
      loginUserAction({
        payload: data
      })
    );
  } catch (error) {
    console.log(error)
  }
};

export { createUserAction, updateUserAction, getUserAction, loginUserAction };

export default reducer;
