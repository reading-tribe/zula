import { ActionType } from "../actions-types";
import { Action } from "../actions/auth";

interface State {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  /*user: null;*/
}

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  /* user: null,*/
};

const authReducer = (state: State = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.REGISTER_SUCCESS:
      localStorage.setItem("token", JSON.stringify(payload /*.token*/));
      return {
        ...state,
        /*...payload*/
        isAuthenticated: true,
        loading: false,
      };
    case ActionType.REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
