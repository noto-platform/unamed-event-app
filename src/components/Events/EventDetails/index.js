import React, { PropTypes } from "react";
import DraggableContainer from "components/Events/DraggableContainer";

const EventDetails = ({ onCancel, theEvent }) =>
  theEvent
    ? <DraggableContainer startHeight={window.innerHeight / 2}>
        <div className="event__top-bar">
          <span className="title">{theEvent.title}</span>
          <span className="close" onClick={onCancel}>Cancel</span>
        </div>
        <div className="event__body">
          <b>Halloj! Här kommer det hända grejjer snart</b>
          <pre>{JSON.stringify(theEvent, null, 2)}</pre>
        </div>
      </DraggableContainer>
    : null;

export default EventDetails;
