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

import { selectAuth } from "store/auth/selectors";
import { setInitialFormState } from "store/events/selectors";

export const withCreateEvent = compose(
  getContext({ firebase: PropTypes.object }),
  connect(selectAuth),
  withState("fields", "setFields", setInitialFormState),
  withHandlers({
    onSubmit: props => event => {
      event.preventDefault();
      // Do some validation here maybe and so on ? ...
      const { auth, fields } = props;
      console.log("Event", { ...fields, owner: auth.uid });
    }
  }),
  lifecycle({
    componentDidMount() {
      const { updateEvent, setFields } = this.props;
      updateEvent ? setFields(updateEvent) : null;
    }
  })
);

export const withEventActionState = compose(
  connect(selectAuth),
  withState("createEventVisible", "setCreateEventVisibility", false),
  withState("editEvent", "setEditEvent", null)
);
