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
  onDragStart,
  onMoveMap,
  onZoom,
  createNewEvent,
  match,
  location
}) => {
  return (
    <div>
      <ReactMapboxGl
        style="mapbox://styles/carlbarrdahl/ciq9x1qqx0000dunptnzgrl9s"
        accessToken={mapboxAccessToken}
        center={event ? event.l : center}
        zoom={zoom}
        movingMethod="easeTo"
        onDragStart={onDragStart}
        onMoveEnd={onMoveMap}
        onZoom={onZoom}
        containerStyle={{
          height: "80vh",
          width: "100vw"
        }}
      >
        {values(
          mapObjIndexed(
            (marker, key) =>
              <EventMarker
                coords={marker.l}
                key={marker.g}
                id={key}
                expanded={geo.distance(center, marker.l) < 0.1}
              />,
            locations
          )
        )}
      </ReactMapboxGl>
      <Crosshair />
      <Button text="+" onClick={createNewEvent} />

      {/* TODO Where should we put this ? */}
      {match.params.action === "create" ? <CreateEvent /> : null}
      {match.params.action === "update" ? <UpdateEvent /> : null}
    </div>
  );
};

export default EventMap;
