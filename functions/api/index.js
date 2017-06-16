/*
TODO: consolidate this with store/events/crud
*/
const R = require("ramda");

exports.event = {
  create: api => event => {
    const ref = api.firebase.database().ref().child("events").push();
    ref.set(
      R.merge(event, {
        id: ref.key,
        owner: event.owner || api.auth.uid
      })
    );

    api.firebase.geo.set(ref.key, [event.lng, event.lat]);
  },
  update: api => event =>
    api.firebase.database().ref("events/" + event.id).update(event),
  delete: api => event =>
    api.firebase.database().ref("events/" + event.id).remove()
};
