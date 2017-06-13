import React, { PropTypes } from "react";
import { compose, withHandlers, mapProps } from "recompose";
import { withRouter } from "react-router";

import { setMapCenter } from "store/map/actions";
import { selectMap, selectMarker } from "store/map/selectors";

import EventMap from "components/EventMap";
import entities, { mapEntityById } from "containers/Entities";
import nearbySearch from "containers/NearbySearch";
import mapInteractions from "containers/MapInteractions";
import EventsView from "components/Events/EventList";
import EventDetailView from "components/Events/EventDetails";

const NearbyEvents = compose(
  withRouter,
  mapInteractions,
  entities("locations"),
  nearbySearch
)(EventMap);

const EventList = compose(withRouter, entities("events"))(EventsView);

const EventDetails = compose(mapEntityById("events"), entities("events"))(
  EventDetailView
);

export const Events = ({ match, history, ...props }) => {
  return (
    <div>
      <NearbyEvents />
      {!match.params.id && !match.params.action && <EventList />}
      {match.params.id && <EventDetails id={match.params.id} />}
    </div>
  );
};

export default Events;
