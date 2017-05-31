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
  withState("title", "setTitle", "Testing"),
  withState("description", "setDescription", "Desc"),
  withState("attendees", "setAttendees", "2"),
  withState("startTime", "setStartTime", "20"),
  withState("endTime", "setEndTime", "23"),
  mapProps(
    ({
      setTitle,
      setDescription,
      setAttendees,
      setStartTime,
      setEndTime,
      ...rest
    }) => ({
      setTitle: element => setTitle(element.target.value),
      setDescription: element => setDescription(element.target.value),
      setAttendees: element => setAttendees(element.target.value),
      setStartTime: element => setStartTime(element.target.value),
      setEndTime: element => setEndTime(element.target.value),
      handleCreateEvent: () => {
        // Do some validation here maybe and so on...
        const { title, description, attendees, startTime, endTime } = rest;
        console.log(
          "createEvent",
          title,
          description,
          attendees,
          startTime,
          endTime
        );
      },
      ...rest
    })
  ),
  withHandlers({}),
  lifecycle({
    componentDidMount(props) {}
  })
);

// Update and delete in same file?
// export default withCreateEvent;
