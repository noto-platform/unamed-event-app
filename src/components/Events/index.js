import React from "react";
import PropTypes from "proptypes";
import { withCreateEvent, withEventActionState } from "../../containers/Events";
import EventList from "./EventList";
import EventForm from "./EventForm";
import FloatingActionButton from "../Buttons/FloatingActionButton";
import { FORM_ACTION_UPDATE, FORM_ACTION_CREATE } from "../../store/constants";

const CreateEvent = withCreateEvent(EventForm);
const UpdateEvent = withCreateEvent(EventForm);

const Events = ({
  list,
  auth,
  createEventVisible,
  setCreateEventVisibility,
  editEvent,
  setEditEvent
}) => (
  <div>
    <EventList
      list={list}
      auth={auth}
      updateEvent={item => setEditEvent(item)}
    />

    <FloatingActionButton
      onClick={() => setCreateEventVisibility(!createEventVisible)}
      text={`${createEventVisible ? "Cancel" : "New event"}`}
    />

    {createEventVisible
      ? <CreateEvent
          formAction={FORM_ACTION_CREATE}
          onClose={() => setCreateEventVisibility(false)}
        />
      : null}

    {editEvent
      ? <UpdateEvent
          formAction={FORM_ACTION_UPDATE}
          updateEvent={editEvent}
          onClose={() => setEditEvent(null)}
        />
      : null}
  </div>
);

export default withEventActionState(Events);
