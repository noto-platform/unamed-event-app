import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AuthView from "components/Auth";
import EventsView from "components/Events";
import EventCreator from "components/EventCreator";

import GeoLocation from "containers/GeoLocation";
import Firebase from "containers/Firebase";

import withAuth from "containers/Auth";
import withEntities from "containers/Entities";
import withEventCRUD from "containers/Events";
import withNearbySearch from "containers/NearbySearch";

const Auth = withAuth(AuthView);
const Events = withEntities("events")(EventsView);
// const EventCRUD = withEventCRUD(EventCreator);
// const NearbyEvents = withNearbySearch(Events);

const Home = () => <div>Home testing</div>;
// <NearbyEvents />
// <EventCRUD />

const App = ({ store, firebase, geolocation }) => (
  <Provider store={store}>
    <Firebase firebase={firebase}>
      <GeoLocation geolocation={geolocation} />
      <Auth />

      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
        </div>

      </Router>
    </Firebase>
  </Provider>
);

export default App;
