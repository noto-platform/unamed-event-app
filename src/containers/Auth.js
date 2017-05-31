import PropTypes from "proptypes";
import { connect } from "react-redux";
import { compose, lifecycle, getContext, withHandlers } from "recompose";

import Auth from "components/Auth";

import { changeAuthState, authFailure } from "store/auth/actions";
import { selectAuth } from "store/auth/selectors";
import { linkAccount, signInAnonymously } from "store/auth/logic";

const withAuth = compose(
  getContext({ firebase: PropTypes.object }),
  connect(selectAuth, { changeAuthState, authFailure }),
  withHandlers({
    onLogin: signInAnonymously,
    onFacebookConnect: linkAccount
  }),
  lifecycle({
    componentDidMount() {
      const { firebase, changeAuthState } = this.props;

      firebase.auth().onAuthStateChanged(changeAuthState);
    }
  })
);

export default withAuth(Auth);
