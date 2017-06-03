import PropTypes from "proptypes";
import { connect } from "react-redux";
import {
  compose,
  lifecycle,
  getContext,
  withHandlers,
  withState,
  mapProps
} from "recompose";

import { FORM_ACTION_UPDATE, FORM_ACTION_CREATE } from "store/constants";
import { selectAuth } from "store/auth/selectors";
import { setInitialFormState } from "store/events/selectors";

export const withCreateOrUpdate = compose(
  getContext({ firebase: PropTypes.object }),
  connect(selectAuth),
  withState("fields", "setFields", setInitialFormState),
  withHandlers({
    onInput: ({ fields, setFields }) => ({ target }) =>
      setFields({ ...fields, [target.name]: target.value }),
    onSubmit: props => event => {
      event.preventDefault();
      // TODO validation
      const { auth, fields, formAction } = props;

      // TODO sent to firebase / call EventCRUD prop
      formAction === FORM_ACTION_CREATE
        ? console.log("CREATE EVENT", { ...fields, owner: auth.uid })
        : console.log("UPDATE EVENT", { ...fields, owner: auth.uid });
    }
  }),
  lifecycle({
    componentDidMount() {
      const { updateEvent, setFields } = this.props;
      updateEvent ? setFields(updateEvent) : null;
    }
  })
);

export const withDelete = compose(
  getContext({ firebase: PropTypes.object }),
  withHandlers({
    onConfirm: ({ item, onCancel }) => () => {
      // TODO sent to firebase / call EventCRUD prop
      console.log("DELETE EVENT", item);
      onCancel(); // close modal after delete
    }
  })
);

export const withEventActionState = compose(
  connect(selectAuth),
  withState("createEventVisible", "setCreateEventVisibility", false),
  withState("editEvent", "setEditEvent", null),
  withState("confirmDeleteEvent", "setConfirmDelete", null),
  withHandlers({
    toggleCreateEvent: ({
      createEventVisible,
      setCreateEventVisibility
    }) => () => setCreateEventVisibility(!createEventVisible),
    toggleConfirmDeleteModal: ({
      confirmDeleteEvent,
      setConfirmDelete
    }) => eventToDelete => {
      setConfirmDelete(eventToDelete);
    }
  })
);
