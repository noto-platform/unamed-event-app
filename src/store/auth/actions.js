import { createAction } from "redux-actions";

export const authStateChanged = createAction("auth/CHANGE_STATE");
export const authFailure = createAction("auth/FAILURE");

export const signInAnonymously = () => (dispatch, _, { firebase }) =>
  firebase.auth().signInAnonymously().catch(authFailure);

export const changeAuthState = auth => (dispatch, _, { firebase }) => {
  if (!auth) {
    return dispatch(signInAnonymously());
  }
  return dispatch(authStateChanged(auth));
};

export const linkAccount = accessToken => (dispatch, _, { firebase }) => {
  const credential = firebase.auth.FacebookAuthProvider.credential(accessToken);
  const { currentUser } = firebase.auth();

  firebase.auth().signInWithCredential(credential).catch(authFailure);
};
