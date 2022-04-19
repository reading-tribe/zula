import { ActionType } from "../../actions-types";

interface registerSuccess {
  type: ActionType.REGISTER_SUCCESS;
  payload: {
    id: string;
    author: string;
  };
}

interface registerFail {
  type: ActionType.REGISTER_FAIL;
  payload: string;
}

export type Action = registerSuccess | registerFail;
