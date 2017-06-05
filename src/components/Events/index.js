import React from "react";
import PropTypes from "proptypes";
import {
  withCreateOrUpdate,
  withDelete,
  withEventActionState
} from "../../containers/EventForm";
import EventList from "./EventList";
import EventForm from "./EventForm";
import FloatingActionButton from "../Buttons/FloatingActionButton";
import Modal from "../Modal";
import { FORM_ACTION_UPDATE, FORM_ACTION_CREATE } from "../../store/constants";

const CreateEvent = withCreateOrUpdate(EventForm);
const UpdateEvent = withCreateOrUpdate(EventForm);
const ConfirmDeleteModal = withDelete(Modal);

const Events = ({
  events,
  auth,
  createEventVisible,
  toggleCreateEvent,
  confirmDeleteEvent,
  toggleConfirmDeleteModal,
  editEvent,
  setEditEvent
}) => (
  <div>
    <EventList events={events} auth={auth} updateEvent={setEditEvent} />
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

    {confirmDeleteEvent
      ? <ConfirmDeleteModal
          onCancel={toggleConfirmDeleteModal}
          item={confirmDeleteEvent}
        >
          <h4>Delete {confirmDeleteEvent.title}?</h4>
        </ConfirmDeleteModal>
      : null}
  </div>
);

export default withEventActionState(Events);
