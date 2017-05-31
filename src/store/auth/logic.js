export const signInAnonymously = ({ firebase, authFailure }) => () =>
  firebase.auth().signInAnonymously().catch(authFailure);

export const linkAccount = ({
  firebase: { auth },
  changeAuthState,
  authFailure,
}) => ({ accessToken }) => {
  const credential = auth.FacebookAuthProvider.credential(accessToken);
  const { currentUser } = auth();

  if (!currentUser) {
    auth().signInWithCredential(credential).catch(authFailure);

    // Already linked?
  } else if (!currentUser.providerData[0]) {
    currentUser
      .linkWithCredential(credential)
      .then(changeAuthState, authFailure);
  }
};
