const R = require("ramda");
const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const GeoFire = require("geofire");

const serviceAccount = require("./serviceAccountKey.json");
const api = require("./api");
const spider = require("./spider");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://eventplatform-1430d.firebaseio.com/"
});

const db = firebase.database();
firebase.geo = new GeoFire(db.ref("locations"));

const ONE_DAY = 1000 * 60 * 60 * 24;
const removeEvents = () => {
  console.log("Finding events to remove...");
  const events = db.ref("events").orderByChild("end_time").endAt(Date.now());

  events.once("value", e => {
    const res = e.val();
    if (res) {
      const remove = R.map(e => null, res);
      console.log("Removing: " + R.keys(remove).length + "events...");
      db.ref("events").update(remove);
      db.ref("locations").update(remove);
    }
  });
};

const crawlEvents = () => {
  console.log("Crawling events...");
  spider.crawl().then(events => {
    console.log("Adding: " + events.length + " events...");
    events.forEach(api.event.create({ firebase: firebase }));
  });
};

const createLocation = event => {
  // Do nothing on update
  if (event.data.previous.exists()) {
    return;
  }
  // Remove location
  if (!event.data.exists()) {
    return firebase.geo.remove(event.params.pushId);
  }
  const data = event.data.val();

  return firebase.geo.set(event.params.pushId, [data.lng, data.lat]);
};

exports.removeEvents = functions.pubsub
  .topic("daily-tick")
  .onPublish(removeEvents);

exports.crawlEvents = functions.pubsub
  .topic("hourly-tick")
  .onPublish(crawlEvents);

exports.createLocation = functions.database
  .ref("/events/{pushId}")
  .onWrite(createLocation);
