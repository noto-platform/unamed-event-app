import R from 'ramda';
import { handleActions } from 'redux-actions';

import { initialState } from "./selectors";

import * as a from './actions';

const pickAuth = R.pick([
  'uid',
  'displayName',
  'photoURL',
  'email',
  'emailVerified',
  'phoneNumber',
  'isAnonymous',
  'providerData',
  'apiKey',
  'appName',
  'authDomain',
  'stsTokenManager',
  'redirectEventId',
]);

export default handleActions(
  {
    [a.changeAuthState]: (state, { payload }) => ({
      ...state,
      ...pickAuth(payload)
    })
  },
  initialState,
);
