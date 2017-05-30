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

import { updateEntities } from "store/actions";
import { getListOfType } from "store/entities/selectors";

const withEntities = entityType =>
  compose(
    getContext({ firebase: PropTypes.object }),
    connect(getListOfType(entityType), { updateEntities }),
    withHandlers({
      update: ({ updateEntities }) => snap =>
        updateEntities(entityType, snap.val()),
    }),
    mapProps(({ firebase, ...props }) => ({
      ...props,
      dbRef: firebase.database().ref(entityType),
    })),
    lifecycle({
      componentWillMount() {
        const { dbRef, update } = this.props;
        dbRef.on("value", update);
      },
      componentWillUnmount() {
        const { dbRef, update } = this.props;
        dbRef.off("value", update);
      },
    }),
  );

export default withEntities;
