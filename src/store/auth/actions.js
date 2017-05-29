import { createAction } from "redux-actions";

export const changeAuthState = createAction("CHANGE_AUTH_STATE");
export const authFailure = createAction("AUTH_FAILURE");
