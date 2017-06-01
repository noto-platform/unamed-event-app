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

const formFields = {
  title: "",
  desc: "",
  max_attendees: "",
  start_time: "",
  end_time: ""
};

export const withCreateEvent = compose(
  getContext({ firebase: PropTypes.object }),
  connect(selectAuth),
  withState("fields", "setField", formFields),
  withHandlers({
    onSubmit: props => event => {
      // Do some validation here maybe and so on ? ...
      event.preventDefault(); // TODO remove form tag ?
      const { auth, fields } = props;
      console.log("createEvent", { ...fields, owner: auth.uid });
    }
  }),
  lifecycle({
    componentDidUpdate() {}
  })
);

// Update and delete in same file?
// export default withCreateEvent;
