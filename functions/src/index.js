import crud from "../../src/store/events/crud";
import {
  compose,
  map,
  path,
  pick,
  curry,
  reduce,
  assoc,
  keys,
  invertObj,
  values
} from "ramda";

import { geofire } from "../../src/services/firebase";

const axios = require("axios");

const BASE_URL =
  "http://www.djungeltrumman.se/wp-admin/admin-ajax.php?action=ajax_get_clubs";

var date = new Date().toISOString().substring(0, 10);

var admin = require("firebase-admin");
admin.geo = geofire;
// Fetch the service account key JSON file contents
var serviceAccount = require("../serviceAccountKey.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://eventplatform-1430d.firebaseio.com/"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var eventsRef = db.ref("events/");
// eventsRef.once("value", function(snapshot) {
//   console.log(snapshot.val());
// });

// axios
//   .get(BASE_URL, {
//     params: {
//       date
//     }
//   })
//   .then(res => {
//     const events = compose(
//       map(e => ({
//         title: e.post_title,
//         owner: "djungeltrumman",
//         tags: [(e.club_category || "").toLowerCase()],
//         description: e.post_content,
//         // location: {
//           lat: +e.venue_address.lat,
//           lng: +e.venue_address.lng,
//         // },
//         openinghours: e.openinghours,
//         id: e.ID
//         // ...e,
//       })),
//       path(["data", "data"])
//     )(res);
//     // console.log(events);
//     events.forEach(event => {
//       // console.log(events.id)
//       crud.onCreate({
//         firebase: admin,
//         fields: event,
//         auth: {
//           uid: "djungeltrumman"
//         }
//       })();
//       // eventsRef.child(event.id).set(event)
//     })
//   })
//   .catch(err => {
//     console.log(err);
//   });
