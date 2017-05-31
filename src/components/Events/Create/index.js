import React from "react";

// TODO
// Use date pickers for start and end time ?

const CreateEvent = ({ setField, ...fields, handleCreateEvent }) => (
  <div>
    <h4>Create event</h4>
    <p>
      <input
        type="text"
        placeholder="Title"
        onChange={e => setField("title", e)}
      />
    </p>
    <p>
      <textarea
        type="text"
        placeholder="Description"
        rows="5"
        onChange={e => setField("description", e)}
      />
    </p>
    <p>
      <input
        type="number"
        placeholder="Attendees"
        onChange={e => setField("attendees", e)}
      />
    </p>
    <p>
      <input
        type="number"
        placeholder="Star time"
        onChange={e => setField("startTime", e)}
      />
      <input
        type="number"
        placeholder="End time"
        onChange={e => setField("endTime", e)}
      />
    </p>
    <p>
      <button onClick={handleCreateEvent}>Create</button>
    </p>
  </div>
);

export default CreateEvent;
