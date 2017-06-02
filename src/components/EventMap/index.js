import React from "react";
import PropTypes from "proptypes";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import { mapboxAccessToken } from "config";

const EventMap = ({ center, markers }) => (
  <ReactMapboxGl
    style="mapbox://styles/carlbarrdahl/ciq9x1qqx0000dunptnzgrl9s"
    accessToken={mapboxAccessToken}
    center={center}
    zoom={[14]}
    containerStyle={{
      height: "80vh",
      width: "100vw"
    }}
  >
    {markers.map((marker, i) => (
      <Layer type="symbol" id={i} layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[marker.coords]} />
      </Layer>
    ))}
  </ReactMapboxGl>
);

export default EventMap;
