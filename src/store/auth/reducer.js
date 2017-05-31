import { isEmpty, pick } from "ramda";
import { handleActions } from "redux-actions";
import { isNil } from "ramda";
import { initialState } from "./selectors";

import * as a from "./actions";

const pickAuth = pick([
  "uid",
  "displayName",
  "photoURL",
  "email",
  "emailVerified",
  "phoneNumber",
  "isAnonymous",
  "providerData",
  "apiKey",
  "appName",
  "authDomain",
  "stsTokenManager",
  "redirectEventId",
]);

export default handleActions(
  {
    [a.changeAuthState]: (state, { payload }) => ({
      ...state, // Stupid null-check
      ...pickAuth(payload || {}),
    }),
  },
  initialState,
);
