import React from "react";
import PropTypes from "proptypes";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

import { mapboxAccessToken } from "config";

// TODO: move to containers/EventDetails and components/EventMarker
import { connect } from "react-redux";
const withEventDetails = connect(
  (state, { id }) => (state.entities.events || {})[id] || {}
);
const EventMarker = withEventDetails(({ title, coords }) => (
  <Marker coordinates={coords} style={{ color: "red" }}>{title}</Marker>
));

const EventMap = ({ coords = [11.966679, 57.705407], list, markers = [] }) => (
  <ReactMapboxGl
    style="mapbox://styles/carlbarrdahl/ciq9x1qqx0000dunptnzgrl9s"
    accessToken={mapboxAccessToken}
    center={[coords[1], coords[0]]}
    zoom={[14]}
    containerStyle={{
      height: "80vh",
      width: "100vw"
    }}
  >
    {Object.keys(list).map((key, i) => (
      <EventMarker coords={list[key].l} id={key} />
    ))}
  </ReactMapboxGl>
);

export default EventMap;
