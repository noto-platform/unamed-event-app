import PropTypes from "proptypes";
import { compose, getContext, withState, withHandlers } from "recompose";

// const crudMap = {
//   events: require("store/events/crud"),
//   users: require("store/users/crud"),
// }
// const CRUD = type => compose(
//   withHandlers(crudMap[type])
// )

const CRUD = compose(
  getContext({ firebase: PropTypes.object }),
  withHandlers({
    // TODO: move to store/events/crud
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
      firebase.database().ref(`events/${event.id}`).remove(),

    // TODO: Move to store/users/crud
    onAttend: ({ id, attending, userId, eventAction, firebase }) => () => {
      firebase // Move to cloud functions onWrite()
        .database()
        .ref(`events/${id}/attending/${userId}`)
        .set(!attending);
      firebase
        .database()
        .ref(`users/${userId}/events/${id}/attending`)
        .set(!attending);
    }
  })
);

export default CRUD;
