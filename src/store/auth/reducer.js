import { isEmpty, pick, compose, mergeAll } from "ramda";
import { handleActions } from "redux-actions";
import { isNil } from "ramda";
import { initialState } from "./selectors";

import * as a from "./actions";

export const pickAuth = pick([
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
  "redirectEventId"
]);

export const pickProviderId = auth =>
  auth
    ? compose(
        ({ uid }) => uid,
        ({ providerData }) => mergeAll(providerData),
        pickAuth
      )(auth)
    : null;

export default handleActions(
  {
    [a.changeAuthState]: (state, { payload }) => ({
      ...state, // Stupid null-check
      ...pickAuth(payload || {})
    })
  },
  initialState
);
