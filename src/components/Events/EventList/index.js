import React, { PropTypes } from "react";
import "../EventContainer/index.css";
import { isEventOwner } from "store/events/selectors";
import EventContainer from "../EventContainer";
import "./index.css";

const EventList = ({ events, auth, updateEvent, deleteEvent }) => {
  return (
    <div>
      <EventContainer fullPageEnabled={true} scrollEnabled={true}>
        <div className="event__top-bar">
          <span className="title">Events</span>
        </div>

        <div className="event__body event__body--scroll">
          {Object.keys(events).map(key => events[key]).map((item, id) => {
            return (
              <div className="event-list-item" key={`event_${item.id}`}>
                <div><b>{item.title}</b></div>
                {/*<div>Owner: {item.owner}</div>
              <div>Desc: {item.desc}</div>
              <div>Start: {item.start_time}</div>
              <div>End: {item.end_time}</div>
              <div>Location: {item.lat} - {item.lng}</div>*/}
              </div>
            );
          })}
        </div>
      </EventContainer>
      );
    </div>
  );
};

export default EventList;
