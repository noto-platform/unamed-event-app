import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AuthView from "components/Auth";
import EventsView from "components/Events";
import EventCreator from "components/EventCreator";
import EventMap from "components/EventMap";

import GeoLocation from "containers/GeoLocation";
import Firebase from "containers/Firebase";

import withAuth from "containers/Auth";
import withEntities from "containers/Entities";
// import withEventCRUD from "containers/Events";
import withNearbySearch from "containers/NearbySearch";

// const EventCRUD = withEventCRUD(EventCreator);
// const NearbyEvents = withNearbySearch(EventMap);

const Auth = withAuth(AuthView);
const EventList = withEntities("events")(EventsView);
const NearbyEvents = withEntities("locations")(withNearbySearch(EventMap));

const App = ({ store, firebase, geolocation }) =>
  <Provider store={store}>
    <Firebase firebase={firebase}>
      <GeoLocation geolocation={geolocation} />
      <NearbyEvents />
      <EventList />

      <Auth />

    </Firebase>
  </Provider>;

export default App;
