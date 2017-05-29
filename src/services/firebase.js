import firebase from "firebase";
import { firebaseConfig } from "config";

import { events } from "store/initialState";

firebase.initializeApp(firebaseConfig);

// Create events
// events.map(e => {
//   console.log(e)
//   firebase.database().ref().child('events').push(e);
// })
export default firebase;
