import React from "react";

// TODO
// Use date pickers for start and end time ?

const CreateEvent = ({ setField, fields, onSubmit, auth, ...props }) => (
  <form onSubmit={onSubmit}>
    <h4>Create event</h4>
    <i>Debug Owner: {auth.uid}</i>
    <p>
      <input
        type="text"
        placeholder="Title"
        value={fields.title}
        onChange={e => setField({ ...fields, title: e.target.value })}
      />
    </p>
    <p>
      <textarea
        type="text"
        placeholder="Description"
        rows="5"
        value={fields.desc}
        onChange={e => setField({ ...fields, desc: e.target.value })}
      />
    </p>
    <p>
      <input
        type="number"
        placeholder="Max attendees"
        value={fields.max_attendees}
        onChange={e => setField({ ...fields, max_attendees: e.target.value })}
      />
    </p>
    <p>
      <input
        type="number"
        placeholder="Star time"
        value={fields.start_time}
        onChange={e => setField({ ...fields, start_time: e.target.value })}
      />
      <input
        type="number"
        placeholder="End time"
        value={fields.end_time}
        onChange={e => setField({ ...fields, end_time: e.target.value })}
      />
    </p>
    <p>
      <button type="submit">Create</button>
    </p>
  </form>
);

export default CreateEvent;
