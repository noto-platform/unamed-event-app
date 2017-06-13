import React from "react";
import { Marker as MapboxMarker } from "react-mapbox-gl";
import styled from "styled-components";
import color from "open-color";
import { Link } from "react-router-dom";

// state [SELECTED, VIEWING]
const Marker = styled(MapboxMarker)`
  width: ${({ expanded }) => (expanded ? 200 : 30)}px;
  height: ${({ expanded }) => (expanded ? 100 : 30)}px;
  background: ${color.gray[0]};
  border-radius: 3px;
  display: flex;
  padding: 0 3px;
  font-size: 13px;
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
  tags,
  expanded,
  onClick
}) => {
  const handleClick = () => onClick(id);

  return (
    <Marker expanded={expanded} coordinates={coords}>
      <div>
        <div onClick={handleClick}>
          <strong>
            {expanded
              ? title
              : (() => {
                  /**
                   * TODO Ugly temp fix to avoid crash when tags are undefined
                   */
                  return tags ? tags[0] : ":)";
                })()}
          </strong>
          {expanded && <small><a href="#">{owner}</a></small>}
        </div>
        {expanded &&
          <div>
            <div><small>16:00 | 157 / 200</small></div>
            <div>{title}</div>

            {/* Do we need this ? */}
            <div>
              <Link to={`/events/${id}`}>view</Link>
              <Link to={`/events/${id}/attend`}>attend</Link>
            </div>
          </div>}
      </div>
    </Marker>
  );
};
export default MapMarker;
