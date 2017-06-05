import { compose, mapObjIndexed, values } from "ramda";
import React from "react";
import { withRouter } from "react-router";
import PropTypes from "proptypes";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import { mapboxAccessToken } from "config";
import { mapEntityById } from "containers/Entities";
import { markerInteractions } from "containers/MapInteractions";

import Marker from "./Marker";
import Crosshair from "./Crosshair";
import Button from "components/Buttons/FloatingActionButton";

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
  onZoom
}) => (
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
          (marker, key) => (
            <EventMarker
              coords={marker.l}
              key={marker.g}
              id={key}
              expanded={geo.distance(center, marker.l) < 0.1}
            />
          ),
          locations
        )
      )}
    </ReactMapboxGl>
    <Crosshair />
    <Button text="+" />
  </div>
);

export default EventMap;
