import React from "react";
import PropTypes from "proptypes";

const Events = ({ events }) => (
  <div>
    <pre>{JSON.stringify(events, null, 2)}</pre>
  </div>
);

export default Events
