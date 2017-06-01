import React, { PropTypes } from "react";
import { isEventOwner } from "store/events/selectors";

const EventList = ({ list, auth, updateEvent }) => (
  <div>
    {list.map((item, id) => (
      <div key={`event_${id}`} style={{ border: "1px solid #eee" }}>
        <span><b>{item.title}</b></span>

        {isEventOwner(item.owner, auth)
          ? <button onClick={() => updateEvent(item)}>Edit</button>
          : null}

        <br /><span>Owner:{item.owner}</span>
        <span>Desc:{item.desc}</span><br />
        <span>Start:{item.start_time}</span><br />
        <span>End: {item.end_time}</span><br />
        <span>Location: {item.lat} - {item.lng}</span><br />
      </div>
    ))}
  </div>
);

export default EventList;
