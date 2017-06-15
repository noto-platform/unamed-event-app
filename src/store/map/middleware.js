import { updateEntities, removeEntity } from "store/entities/actions";
import { locateSuccess } from "store/locations/actions";

export default function createMiddleware(firebase) {
  return ({ dispatch }) => {
    // Set up initial query
    const geoquery = firebase.geo.query({
      center: [11.9, 57.69],
      radius: 5
    });
    const eventsRef = firebase.database().ref("events");

    // Action creators
    const updateEvents = snap =>
      dispatch(updateEntities("events", { [snap.key]: snap.val() }));
    const updateLocations = loc => dispatch(updateEntities("locations", loc));

    /*
    Set up listeners to update state on changes in locations or events
    */
    geoquery.on("key_entered", (key, loc) => {
      updateLocations({ [key]: loc });

      // Fetch event data and subscribe to changes
      eventsRef.child(key).on("value", updateEvents);
    });
    // Location moved
    geoquery.on("key_moved", (key, loc) => updateLocations({ [key]: loc }));

    // Location deleted
    geoquery.on("key_exited", (key, loc) => {
      // Remove from state
      dispatch(removeEntity("locations", key));
      dispatch(removeEntity("events", key));

      // Unsubscribe
      eventsRef
        .child(key)
        .off("value", snap =>
          updateEntities("events", { [snap.key]: snap.val() })
        );
    });

    return next => action => {
      if (action.type === locateSuccess().type) {
        geoquery.updateCriteria({
          center: [action.payload.longitude, action.payload.latitude]
        });
      }

      next(action);
    };
  };
}
