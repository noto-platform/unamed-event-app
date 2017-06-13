import React, { PropTypes } from "react";
import { Link } from "react-router-dom";

import DraggableContainer from "components/Events/DraggableContainer";

const EventDetails = ({
  title,
  description,
  lat,
  lng,
  openinghours,
  tags = [],
  onCancel
}) =>
  <DraggableContainer
    startHeight={window.innerHeight / 2}
    fullPageEnabled={true}
  >
    <div className="event__top-bar">
      <span className="title">{title}</span>
      <Link to="/events" className="close">
        <i className="fa fa-times" aria-hidden="true" />
      </Link>
    </div>
    <div className="event__body">
      <div className="event-list-item__field">
        <div className="event-list-item__icon">
          <i className="fa fa-info-circle" aria-hidden="true" />
        </div>
        {description}
      </div>
      <div className="event-list-item__field">
        <div className="event-list-item__icon">
          <i className="fa fa-map-marker" aria-hidden="true" />
        </div>
        <span>
          {lat} - {lng}
        </span>
      </div>
      <div className="event-list-item__field">
        <div className="event-list-item__icon">
          <i className="fa fa-clock-o" aria-hidden="true" />
        </div>
        <span>
          {openinghours}
        </span>
      </div>
      <div>
        {tags.map((tag, id) =>
          <div key={`tag_${id}`} className="event-list-item__tag">
            #{tag}
          </div>
        )}
      </div>
    </div>
  </DraggableContainer>;

export default EventDetails;
