import { equals, not, merge, path } from "ramda";
import PropTypes from "proptypes";
import { connect } from "react-redux";
import {
  compose,
  lifecycle,
  mapProps,
  shouldUpdate,
  onlyUpdateForKeys,
  withHandlers,
  withProps
} from "recompose";
import { withRouter } from "react-router";
import { newEvent } from "store/events/actions";
import { setMapCenter, setMapZoom } from "store/map/actions";
import { selectMap, selectMarker } from "store/map/selectors";

export const mapInteractions = compose(
  connect(selectMap, {
    // Event-creation actions should go somewhere else
    onCreateNewEvent: newEvent,

    setMapCenter,
    setMapZoom
  }),
  withRouter,
  /*
  TODO: find a cleaner, more robust solution than componentWillReceiveProps

  Maybe dispatch actions like this and delegate to redux?
  dispatch(navAction({
    action: match.params.action || "view",
    id: "id"
  }))
  */
  onlyUpdateForKeys(["match", "event"]),
  mapProps(props => ({
    ...props,
    center: props.event ? props.event.l : props.center
  })),
  lifecycle({
    componentWillReceiveProps({
      center,
      event,
      match,
      setMapCenter,
      setMapZoom
    }) {
      if (
        event &&
        match.params.resource === "events"
        // match.params.id !== this.props.match.params.id
      ) {
        setMapCenter(event.l);
        setMapZoom([14]);
      }

      console.log("Do action: ", match.params.action);
      console.log("with id: ", match.params.id);
    }
  }),
  withHandlers({
    onDragStart: ({ history }) => map => console.log("Hej"),
    onMoveMap: ({ setMapCenter }) => map => setMapCenter(map.getCenter())
  })
);

export const markerInteractions = compose(
  withRouter,
  connect(selectMarker, { setMapCenter }),
  withHandlers({
    onClick: ({ id, coords, history, setMapCenter }) => () => {
      history.push(`/events/${id}`);
      setMapCenter(coords);
    }
  })
);

export default mapInteractions;
