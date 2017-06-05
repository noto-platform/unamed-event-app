import React from "react";
import { storiesOf } from "@kadira/storybook";

import { Provider } from "react-redux";
import configureStore from "store/configure";

import EventMap from ".";
import state from "store/initialState";

const store = configureStore(state, {
  firebase: {}
});

console.log(state);
const props = {
  center: state.locations.me,
  markers: state.entities.locations
};
storiesOf("EventMap", module).add("default", () => (
  <Provider store={store}><EventMap {...props} /></Provider>
));
