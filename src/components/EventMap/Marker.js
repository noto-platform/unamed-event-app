import React from "react";
import { Marker as MapboxMarker } from "react-mapbox-gl";
import styled from "styled-components";
import color from "open-color";
import { Link } from "react-router-dom";

const Marker = styled(MapboxMarker)`
  width: 30px;
  height: 30px;
  background: ${color.red[5]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .9;
`;

const emojies = "🎭😂🍻🏞👾🤖".split("");

const MapMarker = ({ coords, tags, onClick }) =>
  <Marker coordinates={coords}>
    <div onClick={onClick}>
      {(tags && tags[0]) || "New"}
    </div>
  </Marker>;

export default MapMarker;
