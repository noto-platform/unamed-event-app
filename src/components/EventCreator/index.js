import React from "react";
import PropTypes from "proptypes";

const EventCreator = ({ onCreate }) => (
  <div>
    <button onClick={onCreate}>Create</button>
  </div>
);

export default EventCreator;
