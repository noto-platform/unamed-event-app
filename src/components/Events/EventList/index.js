import React, { PropTypes } from "react";
import { isEventOwner } from "store/events/selectors";

const EventList = ({ events, auth, updateEvent }) => (
  <div>
    {Object.keys(events).map(key => events[key]).map((item, id) => {
      const onUpdate = () => updateEvent(item);

      return (
        <div key={`event_${id}`} style={{ border: "1px solid #eee" }}>
          <div><b>{item.title}</b></div>

          {isEventOwner(item.owner, auth)
            ? <button onClick={onUpdate}>Edit</button>
            : null}

          <div>Owner: {item.owner}</div>
          <div>Desc: {item.desc}</div>
          <div>Start: {item.start_time}</div>
          <div>End: {item.end_time}</div>
          <div>Location: {item.lat} - {item.lng}</div>
        </div>
      );
    })}
  </div>
);

export default EventList;
