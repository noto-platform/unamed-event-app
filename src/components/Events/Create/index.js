import React from "react";

// TODO
// Use date pickers for start and end time ?

const CreateEvent = ({ ...state, handleCreateEvent }) => (
  <div>
    <h4>Create event</h4>
    <p>
      <input
        type="text"
        placeholder="Title"
        onChange={state.setTitle}
        value={state.title}
      />
    </p>
    <p>
      <textarea
        type="text"
        placeholder="Description"
        rows="5"
        onChange={state.setDescription}
        value={state.description}
      />
    </p>
    <p>
      <input
        type="number"
        placeholder="Attendees"
        onChange={state.setAttendees}
        value={state.attendees}
      />
    </p>
    <p>
      <input
        type="number"
        placeholder="Star time"
        onChange={state.setStartTime}
        value={state.startTime}
      />
      <input
        type="number"
        placeholder="End time"
        onChange={state.setEndTime}
        value={state.endTime}
      />
    </p>
    <p>
      <button onClick={handleCreateEvent}>Create</button>
    </p>
  </div>
);

export default CreateEvent;
