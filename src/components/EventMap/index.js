import { compose, mapObjIndexed, values } from "ramda";
import React from "react";
import { withRouter } from "react-router";
import PropTypes from "proptypes";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import { mapboxAccessToken } from "config";
import entities, { mapEntityById } from "containers/Entities";
import { markerInteractions } from "containers/MapInteractions";
import { formInput, create, update, withDelete } from "containers/EventForm";

import Marker from "./Marker";
import Crosshair from "./Crosshair";
import Button from "components/Buttons/FloatingActionButton";
import EventForm from "components/Events/EventForm";

const CreateEvent = compose(formInput, create)(EventForm);
const UpdateEvent = compose(formInput, update)(EventForm);

// const EventMarker = mapEntityByProp("events")(Marker);

const EventMarker = compose(
  markerInteractions,
  withRouter,
  mapEntityById("events")
)(Marker);

const EventMap = ({
  firebase: { geo },
  center,
  event,
  zoom,
  locations = [],
  onMoveMap,
  onCreateNewEvent,
  match
}) => {
  return (
    <div>
      <ReactMapboxGl
        style="mapbox://styles/carlbarrdahl/ciq9x1qqx0000dunptnzgrl9s"
        accessToken={mapboxAccessToken}
        center={event ? event.l : center}
        zoom={zoom}
        movingMethod="easeTo"
        onMoveEnd={onMoveMap}
        containerStyle={{
          height: "50vh",
          width: "100vw"
        }}
      >
        {values(
          mapObjIndexed(
            (marker, key) =>
              <EventMarker
                coords={marker.l}
                key={key}
                id={key}
                expanded={geo.distance(center, marker.l) < 0.2}
              />,
            locations
          )
        )}
      </ReactMapboxGl>
      <Crosshair />
      <Button text="+" onClick={onCreateNewEvent} />

      {/* TODO Where should we put this ? */}
      {match.params.action === "create" ? <CreateEvent /> : null}
      {match.params.action === "update" ? <UpdateEvent /> : null}
    </div>
  );
};

export default EventMap;
