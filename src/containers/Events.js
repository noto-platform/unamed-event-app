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

export const withCreateEvent = compose(
  getContext({ firebase: PropTypes.object }),
  connect(selectAuth),
  withState("fields", "setField", {}), // TODO Set init keys ?
  mapProps(({ setField, fields, ...props }) => ({
    setField: (field, element) =>
      setField({ ...fields, [field]: element.target.value }),
    handleCreateEvent: e => {
      e.preventDefault(); // TODO remove form tag ?

      // Do some validation here maybe and so on ? ...
      const { auth } = props;
      console.log("createEvent", { ...fields, owner: auth.uid });
    },
    ...props
  })),
  withHandlers({}),
  lifecycle({
    componentDidUpdate() {}
  })
);

// Update and delete in same file?
// export default withCreateEvent;
