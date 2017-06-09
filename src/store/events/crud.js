export default {
  onCreate: ({ auth, firebase, fields }) => () => {
    const ref = firebase.database().ref().child("events").push({
      ...fields,
      owner: auth.uid
    });
    firebase.geo.set(ref.key, [fields.lat, fields.lng]);
  },
  onUpdate: ({ firebase }) => event =>
    firebase.database().ref(`events/${event.id}`).update(event),
  onDelete: ({ firebase }) => event =>
    firebase.database().ref(`events/${event.id}`).remove()
};
