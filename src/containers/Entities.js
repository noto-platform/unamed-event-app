import { connect } from "react-redux";
import PropTypes from "proptypes";
import {
  compose,
  getContext,
  lifecycle,
  mapProps,
  withState,
  withHandlers
} from "recompose";

import { updateEntities, updateFailure } from "store/actions";
import { getListOfType } from "store/entities/selectors";

export const mapEntityById = entityType =>
  connect((state, { id }) => (state.entities[entityType] || {})[id] || {});

const entities = entityType =>
  compose(
    getContext({ firebase: PropTypes.object }),
    connect(getListOfType(entityType), { updateEntities, updateFailure }),
    withHandlers({
      update: ({ updateEntities }) => snap =>
        updateEntities(entityType, snap.val())
    }),
    mapProps(({ firebase, ...props }) => ({
      ...props,
      dbRef: firebase.database().ref(entityType)
    })),
    lifecycle({
      componentWillMount() {
        const { dbRef, update } = this.props;
        dbRef.on("value", update, updateFailure);
      },
      componentWillUnmount() {
        const { dbRef, update } = this.props;
        dbRef.off("value", update, updateFailure);
      }
    })
  );

export default entities;
