import React from "react";

// TODO
// Use date pickers for start and end time ?

const CreateEvent = ({ setField, handleCreateEvent, auth }) => (
  <form onSubmit={handleCreateEvent}>
    <h4>Create event</h4>
    <i>Debug Owner: {auth.uid}</i>
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
        onChange={e => setField("desc", e)}
      />
    </p>
    <p>
      <input
        type="number"
        placeholder="Max attendees"
        onChange={e => setField("max_attendees", e)}
      />
    </p>
    <p>
      <input
        type="number"
        placeholder="Star time"
        onChange={e => setField("start_time", e)}
      />
      <input
        type="number"
        placeholder="End time"
        onChange={e => setField("end_time", e)}
      />
    </p>
    <p>
      <button type="submit">Create</button>
    </p>
  </form>
);

export default CreateEvent;
