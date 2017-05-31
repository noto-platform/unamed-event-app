import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import withEntities from "./Entities";

import Auth from "./Auth";
import GeoLocation from "./GeoLocation";
import EventsView from "components/Events";
import Firebase from "./Firebase";

const Events = withEntities("events")(EventsView);

const Home = () => <div>Home testing</div>;

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
