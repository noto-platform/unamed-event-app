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

export const withCreateEvent = compose(
  getContext({ firebase: PropTypes.object }),
  withState("fields", "setField", {}), // TODO Set init keys ?
  mapProps(({ setField, fields, ...rest }) => ({
    setField: (field, element) =>
      setField({ ...fields, [field]: element.target.value }),
    handleCreateEvent: () => {
      // Do some validation here maybe and so on...
      const { field } = rest;
      console.log("createEvent", fields);
    },
    ...rest
  })),
  withHandlers({}),
  lifecycle({
    componentDidMount(props) {}
  })
);

// Update and delete in same file?
// export default withCreateEvent;
