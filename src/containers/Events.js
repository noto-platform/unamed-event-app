import { connect } from "react-redux";
import PropTypes from "proptypes";
import {
  compose,
  getContext,
  lifecycle,
  mapProps,
  withState,
  withHandlers,
} from "recompose";

import Events from "components/Events";

import { updateEntities } from "store/actions";
import { makeSelectEntities } from "store/entities/selectors";

const withEntities = entityType =>
  compose(
    getContext({ firebase: PropTypes.object }),
    connect(makeSelectEntities(entityType), { updateEntities }),
    withHandlers({
      update: ({ updateEntities }) => snap =>
        updateEntities(entityType, snap.val()),
    }),
    mapProps(({firebase, entityType, ...props}) => ({
      ...props,
      firebaseRef: firebase.database().ref(entityType)
    })),
    lifecycle({
      componentWillMount() {
        const { firebaseRef, update } = this.props;
        firebaseRef.on("value", update);
      },
      componentWillUnmount() {
        const { firebaseRef, update } = this.props;
        firebaseRef.off("value", update);
      },
    }),
  );

export default withEntities("events")(Events);
