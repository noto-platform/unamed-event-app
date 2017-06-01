import React from "react";
import {
  FORM_ACTION_UPDATE,
  FORM_ACTION_CREATE
} from "../../../store/constants";

// TODO
// Use date pickers for start and end time ?

const EventForm = ({ setFields, fields, onSubmit, onClose, formAction }) => (
  <form onSubmit={onSubmit}>
    <h4>
      {formAction === FORM_ACTION_CREATE ? "Create event" : "Update event"}
    </h4>
    <p>
      <input
        type="text"
        placeholder="Title"
        value={fields.title}
        onChange={e => setFields({ ...fields, title: e.target.value })}
      />
    </p>
    <p>
      <textarea
        type="text"
        placeholder="Description"
        rows="5"
        value={fields.desc}
        onChange={e => setFields({ ...fields, desc: e.target.value })}
      />
    </p>
    <p>
      <input
        type="number"
        placeholder="Start time"
        value={fields.start_time}
        onChange={e => setFields({ ...fields, start_time: e.target.value })}
      />
      <input
        type="number"
        placeholder="End time"
        value={fields.end_time}
        onChange={e => setFields({ ...fields, end_time: e.target.value })}
      />
    </p>
    <p>
      <button type="submit">
        {formAction === FORM_ACTION_CREATE ? "Create" : "Update"}
      </button>
      <button type="button" onClick={onClose}>Cancel</button>
    </p>
  </form>
);

export default EventForm;
