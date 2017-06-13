export default {
  onCreate: ({ auth, firebase, fields }) => () => {
    const ref = firebase.database().ref().child("events").push();
    ref.set({
      ...fields,
      id: ref.key,
      owner: auth.uid
    });

    firebase.geo.set(ref.key, [fields.lng, fields.lat]);
  },
  onUpdate: ({ firebase }) => event =>
    firebase.database().ref(`events/${event.id}`).update(event),
  onDelete: ({ firebase }) => event =>
    firebase.database().ref(`events/${event.id}`).remove()
};
