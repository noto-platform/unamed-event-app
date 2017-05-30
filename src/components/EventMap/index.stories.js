import React from "react";
import { storiesOf } from "@kadira/storybook";
import EventMap from ".";

const props = {
  center: [11.9656, 57.6959],
  markers: [{
    coords: [11.9656123, 57.6959123],
  }]
};
storiesOf("EventMap", module).add("default", () => <EventMap {...props} />);
