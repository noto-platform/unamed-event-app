import PropTypes from "proptypes";
import { connect } from "react-redux";
import { compose, lifecycle, getContext, withHandlers } from "recompose";

import { changeAuthState, linkAccount } from "store/auth/actions";
import { selectAuth } from "store/auth/selectors";

const withAuth = compose(
  getContext({ firebase: PropTypes.object }),
  connect(selectAuth, { changeAuthState, linkAccount }),
  withHandlers({
    onFacebookConnect: ({ linkAccount }) => ({ accessToken }) =>
      linkAccount(accessToken)
  }),
  lifecycle({
    componentDidMount() {
      const { firebase, changeAuthState } = this.props;
      firebase.auth().onAuthStateChanged(changeAuthState);
    }
  })
);

export default withAuth;
