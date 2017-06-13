import React, { PropTypes } from "react";
import DraggableContainer from "components/Events/DraggableContainer";

const EventDetails = ({ onCancel, theEvent }) =>
  theEvent
    ? <DraggableContainer
        startHeight={window.innerHeight / 2}
        fullPageEnabled={true}
      >
        <div className="event__top-bar">
          <span className="title">{theEvent.title}</span>
          <span className="close" onClick={onCancel}>
            <i className="fa fa-times" aria-hidden="true" />
          </span>
        </div>
        <div className="event__body">
          <div className="event-list-item__field">
            <div className="event-list-item__icon">
              <i className="fa fa-info-circle" aria-hidden="true" />
            </div>
            {theEvent.description}
          </div>
          <div className="event-list-item__field">
            <div className="event-list-item__icon">
              <i className="fa fa-map-marker" aria-hidden="true" />
            </div>
            <span>
              {theEvent.lat} - {theEvent.lng}
            </span>
          </div>
          <div className="event-list-item__field">
            <div className="event-list-item__icon">
              <i className="fa fa-clock-o" aria-hidden="true" />
            </div>
            <span>
              {theEvent.openinghours}
            </span>
          </div>
          <div>
            {theEvent.tags.map((tag, id) =>
              <div key={`tag_${id}`} className="event-list-item__tag">
                #{tag}
              </div>
            )}
          </div>
        </div>
      </DraggableContainer>
    : null;

export default EventDetails;
