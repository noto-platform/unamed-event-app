import React from "react";
import {
  FORM_ACTION_UPDATE,
  FORM_ACTION_CREATE
} from "../../../store/constants";

// TODO
// Use date pickers for start and end time ?

const EventForm = ({ fields, onSubmit, onClose, formAction, onInput }) => {
  const handleClose = () => onClose(null);

  return (
    <form onSubmit={onSubmit}>
      <h4>
        {formAction === FORM_ACTION_CREATE ? "Create event" : "Update event"}
      </h4>
      <p>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={fields.title}
          onChange={onInput}
        />
      </p>
      <p>
        <textarea
          type="text"
          name="desc"
          placeholder="Description"
          rows="5"
          value={fields.desc}
          onChange={onInput}
        />
      </p>
      <p>
        <input
          type="number"
          name="start_time"
          placeholder="Start time"
          value={fields.start_time}
          onChange={onInput}
        />
        <input
          type="number"
          name="end_time"
          placeholder="End time"
          value={fields.end_time}
          onChange={onInput}
        />
      </p>
      <p>
        <button type="submit">
          {formAction === FORM_ACTION_CREATE ? "Create" : "Update"}
        </button>
        <button type="button" onClick={handleClose}>Cancel</button>
      </p>
    </form>
  );
};

export default EventForm;
