import firebase from "firebase";
import GeoFire from "geofire";
import { firebaseConfig } from "config";

firebase.initializeApp(firebaseConfig);

const geofire = new GeoFire(firebase.database().ref("locations"));

firebase.geo = geofire;
firebase.geo.distance = GeoFire.distance;

export default firebase;
