import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthPage from "components/Auth";
import EventsPage from "components/Events";

const HomePage = () => <div>Home testing</div>;

const router = (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>

      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={AuthPage} />
      <Route path="/events" component={EventsPage} />
    </div>

  </Router>
);

export default router;
