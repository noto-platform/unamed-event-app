import { connect } from "react-redux";
import PropTypes from "proptypes";
import {
  compose,
  getContext,
  lifecycle,
  withState,
  withHandlers,
} from "recompose";

import Events from "components/Events";

import { updateEntities } from "store/entities/actions";
import { createEvent } from "store/events/actions";
import { makeSelectEntities } from "store/entities/selectors";

const entityType = "events"; // TODO: move to props and make container generic for all entites

const withEntities = compose(
  getContext({ firebase: PropTypes.object }),
  connect(makeSelectEntities(entityType), { createEvent, updateEntities }),
  lifecycle({
    componentWillMount() {
      const { firebase, updateEntities } = this.props;

      firebase
        .database()
        .ref(entityType)
        .on("value", snap => updateEntities(entityType, snap.val()));
    },
  }),
);

export default withEntities(Events);
