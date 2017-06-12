import React, { PropTypes } from "react";
import { isEventOwner } from "store/events/selectors";

const EventList = ({ events, auth, updateEvent, deleteEvent }) =>
  <div
    style={{
      height: "50vh",
      overflow: "scroll"
    }}
  >
    {Object.keys(events).map(key => events[key]).map((item, id) => {
      const onUpdate = () => updateEvent(item);
      const onDelete = () => deleteEvent(item);

      return (
        <div key={`event_${id}`} style={{ border: "1px solid #eee" }}>
          <div><a href>{item.title}</a></div>

          {isEventOwner(item.owner, auth)
            ? <button onClick={onUpdate}>Edit</button>
            : null}

          {isEventOwner(item.owner, auth)
            ? <button onClick={onDelete}>Delete</button>
            : null}

          <div>Owner: <a href>@{item.owner}</a></div>
          <div>Desc: {item.description}</div>
          <div>Start: {item.start_time}</div>
          <div>End: {item.end_time}</div>
          <div>Location: {item.lat} - {item.lng}</div>
        </div>
      );
    })}
  </div>;

export default EventList;
