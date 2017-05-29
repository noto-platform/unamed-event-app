import { handleActions } from "redux-actions";

import * as a from "./actions";

export const initialState = {};

export default handleActions(
  {
    [a.changeAuthState]: (state, { payload }) => ({
      ...state,
      "uid": payload.uid,
      "displayName": payload.displayName,
      "photoURL": payload.photoURL,
      "email": payload.email,
      "emailVerified": payload.emailVerified,
      "phoneNumber": payload.phoneNumber,
      "isAnonymous": payload.isAnonymous,
      "providerData": payload.providerData,
      "apiKey": payload.apiKey,
      "appName": payload.appName,
      "authDomain": payload.authDomain,
      "stsTokenManager": payload.stsTokenManager,
      "redirectEventId": payload.redirectEventId
    }),
  },
  initialState,
);
