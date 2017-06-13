import React, { PropTypes } from "react";
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
          {Object.keys(events).map(key => events[key]).map((item, id) => {
            // TODO we should center map somehow here!
            const showEvent = id => history.replace(`events/${item.id}`);

            return (
              <div
                className="event-list-item"
                key={`event_${item.id}`}
                onClick={showEvent}
              >
                <div><b>{item.title}</b></div>
              </div>
            );
          })}
        </div>
      </DraggableContainer>
    </div>
  );
};

export default EventList;
