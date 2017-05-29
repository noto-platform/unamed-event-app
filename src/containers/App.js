import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Auth from "./Auth";
import Events from "./Events";
import Firebase from "./Firebase";

const Home = () => <div>Home testing</div>;

const App = ({ store, firebase }) => (
  <Provider store={store}>
    <Firebase firebase={firebase}>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Auth} />
          <Route path="/events" component={Events} />
        </div>

      </Router>
    </Firebase>
  </Provider>
);

export default App;
