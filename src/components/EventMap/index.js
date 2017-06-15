import { compose, mapObjIndexed, values } from "ramda";
import React from "react";
import { withRouter } from "react-router";
import PropTypes from "proptypes";
import { View } from "react-primitives";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import { mapboxAccessToken } from "config";
import entities, { mapEntityById } from "containers/Entities";
import { markerInteractions } from "containers/MapInteractions";

import Marker from "./Marker";
import Crosshair from "./Crosshair";
import Button from "components/Buttons/FloatingActionButton";

const EventMarker = compose(markerInteractions, mapEntityById("events"))(
  Marker
);

const EventMap = ({
  center,
  event,
  zoom,
  locations = [],
  onDragStart,
  onDragEnd,
  onNewEvent,
  mapHeight
}) =>
  <View>
    <ReactMapboxGl
      style="mapbox://styles/carlbarrdahl/ciq9x1qqx0000dunptnzgrl9s"
      accessToken={mapboxAccessToken}
      center={center}
      zoom={zoom}
      movingMethod="easeTo"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      containerStyle={{
        top: `-${mapHeight / 2}px`,
        height: "100vh",
        width: "100vw"
      }}
    >
      {values(
        mapObjIndexed(
          (marker, key) => <EventMarker coords={marker} key={key} id={key} />,
          locations
        )
      )}
    </ReactMapboxGl>
    <Crosshair position={mapHeight} />
    <Button text="+" onClick={onNewEvent} positionBottom={mapHeight + 100} />
  </View>;

export default EventMap;
