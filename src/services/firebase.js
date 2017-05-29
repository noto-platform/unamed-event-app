import firebase from "firebase"
import { firebaseConfig } from "../config";

console.log(firebase)

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function(user) {
  console.log("onAuthStateChanged", user)
});
// firebase.auth().signInAnonymously().catch(function(error) {
//   console.log(error)

// });
export default firebase;
