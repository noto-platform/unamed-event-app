import React from "react";
import PropTypes from "proptypes";

const Events = ({ list }) => (
  <div>
    <pre>{JSON.stringify(list, null, 2)}</pre>
  </div>
);

export default Events
