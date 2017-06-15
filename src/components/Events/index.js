import React, { PropTypes } from "react";
import { compose, withHandlers, mapProps } from "recompose";
import { withRouter } from "react-router";
import { View } from "react-primitives";

import { setMapCenter } from "store/map/actions";
import { selectMap, selectMarker } from "store/map/selectors";

import EventMap from "components/EventMap";
import entities, { mapEntityById } from "containers/Entities";
import nearbySearch from "containers/NearbySearch";
import mapInteractions from "containers/MapInteractions";
import { eventDetails, formInput } from "containers/EventDetails";
import EventsView from "components/Events/EventList";
import EventDetailView from "components/Events/EventDetails";

const NearbyEvents = compose(
  withRouter,
  mapInteractions,
  entities("locations"),
  nearbySearch
)(EventMap);

const EventList = compose(withRouter, entities("events"))(EventsView);

const EventDetails = compose(
  mapEntityById("events"),
  entities("events"),
  eventDetails,
  formInput
)(EventDetailView);

export const Events = ({ match, history, ...props }) => {
  return (
    <View>
      <NearbyEvents />
      {!match.params.id && !match.params.action && <EventList />}
      {match.params.id && <EventDetails id={match.params.id} />}
    </View>
  );
};

export default Events;
