import React from "react";
import { Marker as MapboxMarker } from "react-mapbox-gl";
import styled from "styled-components";
import color from "open-color";
import { Link } from "react-router-dom";

// state [SELECTED, VIEWING]
const Marker = styled(MapboxMarker)`
  width: ${({ expanded }) => (expanded ? 143 : 20)}px;
  height: ${({ expanded }) => (expanded ? 85 : 20)}px;
  background: ${color.gray[0]};
  border-radius: 3px;
  display: flex;
  padding: 0 3px;
  flex-direction: column;
  transition:
    width 300ms cubic-bezier(0.165, 0.840, 0.440, 1.000),
    height 300ms cubic-bezier(0.165, 0.840, 0.440, 1.000);
  transition-timing-function: transition-timing-function: cubic-bezier(0.165, 0.840, 0.440, 1.000);
  transition-delay: .2s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-break: 1;
  opacity: .9;
`;

const emojies = "🎭😂🍻🏞👾🤖".split("");

const MapMarker = ({
  id,
  start_time,
  title,
  owner,
  coords,
  expanded,
  onClick
}) => {
  return (
    <Marker expanded={expanded} coordinates={coords}>
      <div>
        <div onClick={onClick}>
          <strong>{expanded ? title : "👾"}</strong>
          {expanded && <small><a href="#">{owner}</a></small>}
        </div>
        {expanded &&
          <div>
            <div><small>16:00 | 157 / 200</small></div>
            <div>{title}</div>

            {id === "new"
              ? <div>
                  <button>Save</button>
                </div>
              : <div>
                  <Link to={`/events/${id}`}>view</Link>
                  <Link to={`/events/${id}/attend`}>attend</Link>

                  {/* TODO add update button in detail view and check if owner */}
                  <Link to={`/events/${id}/edit`}>edit</Link>
                </div>}
          </div>}
      </div>
    </Marker>
  );
};
export default MapMarker;
