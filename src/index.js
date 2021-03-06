import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "store/configure";

import App from "containers/App";

import firebase from "services/firebase";
import geolocation from "services/geolocation";

const store = configureStore(undefined, { firebase });

ReactDOM.render(
  <App store={store} firebase={firebase} geolocation={geolocation} />,
  document.getElementById("root")
);
registerServiceWorker();
