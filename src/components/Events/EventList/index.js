import { mapObjIndexed, values } from "ramda";
import React, { PropTypes } from "react";
import { Link } from "react-router-dom";

import "../DraggableContainer/index.css";
import { isEventOwner } from "store/events/selectors";
import DraggableContainer from "../DraggableContainer";
import "./index.css";

const EventList = ({ events, auth, history }) => {
  return (
    <div>
      <DraggableContainer fullPageEnabled={true} scrollEnabled={true}>
        <div className="event__top-bar">
          <span className="title">
            {Object.keys(events).length} upcoming events!
          </span>
        </div>

        <div className="event__body event__body--scroll">
          {values(
            mapObjIndexed(
              (item, id) =>
                <Link className="event-list-item" key={id} to={`/events/${id}`}>
                  <div><b>{item.title}</b></div>
                </Link>,
              events
            )
          )}
        </div>
      </DraggableContainer>
    </div>
  );
};

export default EventList;
