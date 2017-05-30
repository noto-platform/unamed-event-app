import { createAction } from "redux-actions";

export const changeAuthState = createAction("auth/CHANGE_STATE");
export const authFailure = createAction("auth/FAILURE");
