import React, { PropTypes } from "react";
import { compose, withHandlers, mapProps } from "recompose";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { setMapCenter } from "store/map/actions";
import { selectMap, selectMarker } from "store/map/selectors";

import EventMap from "components/EventMap";
import entities from "containers/Entities";
import nearbySearch from "containers/NearbySearch";
import mapInteractions from "containers/MapInteractions";
import { eventDetails } from "containers/EventDetails";
import EventsView from "components/Events/EventList";
import EventDetailView from "components/Events/EventDetails";

const NearbyEvents = compose(
  withRouter,
  mapInteractions,
  entities("locations"),
  nearbySearch
)(EventMap);

const EventList = compose(withRouter, entities("events"))(EventsView);

const EventDetails = compose(entities("events"), eventDetails)(EventDetailView);

export const Events = ({ match, history, ...props }) => {
  return (
    <div>
      <NearbyEvents />
      {!match.params.id && !match.params.action ? <EventList /> : null}
      {match.params.id
        ? <EventDetails
            onCancel={() => history.replace("/events")}
            id={match.params.id}
          />
        : null}
    </div>
  );
};

export default Events;
