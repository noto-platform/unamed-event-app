import React from "react";
import PropTypes from "proptypes";
import { withCreateEvent } from "../../containers/Events";
import Create from "./Create";

const CreateEvent = withCreateEvent(Create);

const Events = ({ list }) => (
  <div>
    <pre>{JSON.stringify(list, null, 2)}</pre>
    <CreateEvent />
  </div>
);

export default Events;
