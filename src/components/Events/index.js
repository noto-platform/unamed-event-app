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
  toggleCreateEvent,
  editEvent,
  setEditEvent
}) => (
  <div>
    <EventList list={list} auth={auth} updateEvent={setEditEvent} />

    <FloatingActionButton
      onClick={toggleCreateEvent}
      text={`${createEventVisible ? "Cancel" : "New event"}`}
    />

    {createEventVisible
      ? <CreateEvent
          formAction={FORM_ACTION_CREATE}
          onClose={toggleCreateEvent}
        />
      : null}

    {editEvent
      ? <UpdateEvent
          formAction={FORM_ACTION_UPDATE}
          updateEvent={editEvent}
          onClose={setEditEvent}
        />
      : null}
  </div>
);

export default withEventActionState(Events);
