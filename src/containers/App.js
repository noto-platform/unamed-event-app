import React from "react";
import { compose } from "recompose";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { withRouter } from "react-router";

import AuthView from "components/Auth";
import EventsView from "components/Events/EventList";
import EventCreator from "components/EventCreator";
import EventMap from "components/EventMap";

import GeoLocation from "containers/GeoLocation";
import Firebase from "containers/Firebase";

import auth from "containers/Auth";
import entities from "containers/Entities";
import nearbySearch from "containers/NearbySearch";
import mapInteractions from "containers/MapInteractions";

import crud from "containers/CRUD";

const Auth = auth(AuthView);
const EventList = entities("events")(EventsView);
const NearbyEvents = compose(
  mapInteractions,
  entities("locations"),
  nearbySearch
)(EventMap);

const App = ({ store, firebase, geolocation }) =>
  <Provider store={store}>
    <Firebase firebase={firebase}>
      <GeoLocation geolocation={geolocation} />

      <Router>
        <Switch>
          <Route path="/events/:id?/:action?" component={NearbyEvents} />
          <Redirect to="/events" />
        </Switch>
      </Router>

      {/* What to do with these? Currently just responsible for data fetch? */}
      <EventList />
      <Auth />

    </Firebase>
  </Provider>;

export default App;
