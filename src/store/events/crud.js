export default {
  onCreate: ({ auth, firebase, fields }) => () => {
    const ref = firebase.database().ref().child("events").push();
    ref.set({
      ...fields,
      id: ref.key,
      owner: auth.uid
    });
  },
  onUpdate: ({ firebase }) => event =>
    firebase.database().ref(`events/${event.id}`).update(event),
  onDelete: ({ firebase }) => event =>
    firebase.database().ref(`events/${event.id}`).remove(),
  onAttend: ({ firebase }) => ({ eventId, userId, isAttending }) =>
    firebase
      .database()
      .ref(`users/${userId}/feeds/events/attending/${eventId}`)
      .set(isAttending)
};
