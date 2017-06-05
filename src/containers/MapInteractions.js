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
import { viewEvent } from "store/events/actions";
import { setMapCenter, setMapZoom } from "store/map/actions";
import { selectMap, selectMarker } from "store/map/selectors";

export const mapInteractions = compose(
  connect(selectMap, { setMapCenter, setMapZoom, viewEvent }),
  withRouter,
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
      console.log(event, center);
      if (
        event &&
        match.params.resource === "events"
        // match.params.id !== this.props.match.params.id
      ) {
        console.log("setcenter");
        setMapCenter(event.l);
        setMapZoom([14]);
      }
    }
  }),
  withHandlers({
    onDragStart: ({ history }) => map => history.push("/events/_"),
    onMoveMap: ({ setMapCenter }) => map => setMapCenter(map.getCenter()),
    onZoom: ({ event, center, setMapCenter }) => map => {
      console.log(event.l, center);
    }
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
