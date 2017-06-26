import { updateEntities, removeEntity } from "store/entities/actions";
import { locateSuccess } from "store/locations/actions";
import { mergeDeepLeft, pipe, prop, reduce } from "ramda";
import { Observable } from "rxjs/Rx";

export default function createMiddleware(firebase) {
  return ({ dispatch }) => {
    // Set up initial query
    const geoquery = firebase.geo.query({
      center: [11.9, 57.69],
      radius: 5
    });

    const eventsRef = firebase.database().ref("events");

    eventsRef.on("child_removed", snap => {
      dispatch(removeEntity("events", snap.key));
      dispatch(removeEntity("locations", snap.key));
    });

    const keyEntered$ = Observable.create(observer =>
      geoquery.on("key_entered", (key, loc) => {
        const emit = snap =>
          observer.next({
            events: { [key]: snap.val() },
            locations: { [key]: loc }
          });

        eventsRef.child(key).on("value", emit);
      })
    );

    const keyMoved$ = Observable.create(observer =>
      geoquery.on("key_moved", (key, loc) =>
        observer.next({ locations: { [key]: loc } })
      )
    );

    geoquery.on("key_exited", (key, loc) => {
      dispatch(removeEntity("locations", key));
      dispatch(removeEntity("events", key));

      // Unsubscribe
      eventsRef.child(key).off();
    });

    const dispatchBufferedEvents = pipe(
      reduce(mergeDeepLeft, {}),
      updateEntities,
      dispatch
    );

    const firebase$ = Observable.merge(keyEntered$, keyMoved$)
      .bufferTime(3000)
      .filter(events => events.length)
      .subscribe(dispatchBufferedEvents);

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
