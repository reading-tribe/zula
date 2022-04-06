import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios"

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
      user: payload.user
    }),
    createUserAction: (state, { payload }) => ({
      ...state,
      user: payload.user
    }),
    getUserAction: (state, { payload }) => ({
      ...state,
      user: payload.user
    }),
    loginUserAction: (state, { payload }) => ({
      ...state,
      user: payload.user,
    }),
  },
});

export const createUser = (user: RegisterRequest) => async (dispatch: Dispatch) => {
  const response = await axios.post("https://81qrzgok36.execute-api.eu-central-1.amazonaws.com/auth/register", user);
  const data = await response.data;
  console.log("response XX#####", data.message);

  dispatch(
    createUserAction({
      message: data.message
    })
  );
};

export const getUser = () => async (dispatch: Dispatch) => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  /*  console.log("response", data.results[0]); */
  
  const user = data.results[0];
  dispatch(
    getUserAction({
      user: user
    })
  );
};

export const loginUser = (user: LoginRequest) => async (dispatch: Dispatch) => {
  const response = await axios.post("https://81qrzgok36.execute-api.eu-central-1.amazonaws.com/auth/login", user);
  const data = await response.data;

  dispatch(
    loginUserAction({
      message: data.message,
      token: data.token
    })
  );
};

export { createUserAction, updateUserAction, getUserAction, loginUserAction };

export default reducer;
