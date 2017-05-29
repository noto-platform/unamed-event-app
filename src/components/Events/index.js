import React from "react";
import PropTypes from "proptypes";
import {
  compose,
  getContext,
  lifecycle,
  withState,
  withHandlers,
} from "recompose";

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
