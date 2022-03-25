import { createSlice, Dispatch } from "@reduxjs/toolkit";

export interface UserState {
  user: object
}

const INITIAL_STATE: UserState = {
 user: {}
};

const {
  reducer,
  actions: { createUserAction, updateUserAction, getUserAction }
} = createSlice({
  name: "user",
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
    })
  },
  initialState: INITIAL_STATE
});

export const getUser = () => async (dispatch: Dispatch) => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  console.log("response", data.results[0]);

  const user = data.results[0];

  dispatch(
    getUserAction({
     user: user
    })
  );
};

export { createUserAction, updateUserAction, getUserAction };

export default reducer;
