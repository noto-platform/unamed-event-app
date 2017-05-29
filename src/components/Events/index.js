import React from "react";
import PropTypes from "proptypes";
import { connect } from "react-redux";
import {
  compose,
  getContext,
  lifecycle,
  withState,
  withHandlers,
} from "recompose";

import { changeAuthState, authFailure } from "store/auth/actions";
import { selectAuth } from "store/auth/selectors";

const EventPage = ({ events }) => (
  <div>
    <pre>{JSON.stringify(events, null, 2)}</pre>
  </div>
);

const withEvents = compose(
  getContext({ firebase: PropTypes.object }),
  withState("events", "update", {}),
  lifecycle({
    componentWillMount() {
      const { firebase, update } = this.props;

      firebase
        .database()
        .ref("events")
        .on("value", snap => update(Object.values(snap.val())));
    },
  }),
);

export default withEvents(EventPage);
