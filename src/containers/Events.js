import React from "react";
import PropTypes from "proptypes";
import {
  compose,
  getContext,
  lifecycle,
  withState,
  withHandlers,
} from "recompose";

import EventPage from "components/Events";

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
