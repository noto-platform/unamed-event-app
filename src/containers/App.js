import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import GeoLocation from "containers/GeoLocation";
import Firebase from "containers/Firebase";

import EventComponent from "components/Events";

import AuthView from "components/Auth";
import auth from "containers/Auth";

const Auth = auth(AuthView);

const App = ({ store, firebase, geolocation }) =>
  <Provider store={store}>
    <Firebase firebase={firebase}>
      <GeoLocation geolocation={geolocation} />

      <Router>
        <Switch>
          <Route path="/events/:id?/:action?" component={EventComponent} />
          <Redirect to="/events" />
        </Switch>
      </Router>

      {/* What to do with these? Currently just responsible for data fetch? */}
      <Auth />

    </Firebase>
  </Provider>;

export default App;
