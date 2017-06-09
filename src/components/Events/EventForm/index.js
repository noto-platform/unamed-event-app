import React from "react";
import {
  FORM_ACTION_UPDATE,
  FORM_ACTION_CREATE
} from "../../../store/constants";

/**
 * TODO
 * Add datepickers for start and end time
 * Add max attendes field?
 */

const EventForm = ({
  fields,
  onSubmit,
  onInput,
  cancelForm,
  match,
  validForm
}) =>
  <form onSubmit={onSubmit}>
    <h4>
      {match.params.action === "create" ? "Create event" : "Update event"}
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
      <button type="submit" disabled={!validForm}>
        {match.params.action === "create" ? "Create" : "Update"}
      </button>
      <button type="button" onClick={cancelForm}>Cancel</button>
    </p>
  </form>;

export default EventForm;
