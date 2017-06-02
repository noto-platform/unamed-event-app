import PropTypes from "proptypes";
import { compose, getContext, withState, withHandlers } from "recompose";

const withEventCRUD = compose(
  getContext({ firebase: PropTypes.object }),
  withState("fields", "setField", {}),
  withHandlers({
    onCreate: ({ firebase, fields }) => () => {
      const ref = firebase.database().ref().child("events").push({
        ...fields,
        owner: firebase.auth().currentUser.uid
      });
      firebase.geo.set(ref.key, [fields.lat, fields.lng]);
    },
    onUpdate: ({ firebase }) => event =>
      firebase.database().ref(`events/${event.id}`).update(event),
    onDelete: ({ firebase }) => event =>
      firebase.database().ref(`events/${event.id}`).remove()
  })
);

export default withEventCRUD;
