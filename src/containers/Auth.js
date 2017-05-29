import PropTypes from "proptypes";
import { connect } from "react-redux";
import { compose, lifecycle, getContext } from "recompose";

import Auth from "components/Auth";

import { changeAuthState, authFailure } from "store/auth/actions";
import { selectAuth } from "store/auth/selectors";

const mapDispatchToProps = (dispatch, { firebase }) => {
  return {
    onLogin: () => firebase.auth().signInAnonymously().catch(authFailure),
    changeAuthState: user => // Stupid, sends either null or function object
      dispatch(changeAuthState(user ? user : {})),
  };
};

const withAuth = compose(
  getContext({ firebase: PropTypes.object }),
  connect(selectAuth, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      const { firebase, changeAuthState } = this.props;
      firebase.auth().onAuthStateChanged(changeAuthState);
    },
  }),
);

export default withAuth(Auth);
