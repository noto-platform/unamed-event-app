import { equals, not, merge, path } from "ramda";
import PropTypes from "proptypes";
import { connect } from "react-redux";
import Rx from "rxjs/Rx";
import {
  compose,
  lifecycle,
  mapProps,
  shouldUpdate,
  onlyUpdateForKeys,
  withHandlers,
  withProps,
  withState
} from "recompose";
import { withRouter } from "react-router";
import { newEvent } from "store/events/actions";
import { setMapCenter, setMapZoom } from "store/map/actions";
import { selectMap, selectMarker } from "store/map/selectors";

export const mapInteractions = compose(
  connect(selectMap, {
    // Event-creation actions should go somewhere else
    newEvent,
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
  withState("mapHeight", "setMapHeight", window.innerHeight),
  mapProps(({ event, center, ...props }) => ({
    ...props,
    center: event || center
  })),
  lifecycle({
    componentWillReceiveProps({ center, match, setMapCenter }) {
      if (center && match.params.id) {
        setMapCenter(center);
      }
    },
    componentDidMount() {
      const { setMapHeight } = this.props;

      Rx.Observable
        .of(0, Rx.Scheduler.animationFrame)
        .repeat()
        .map(() => {
          const eventElement = document.getElementById("wrapper");
          return eventElement ? eventElement.style.bottom.replace("px", "") : 0;
        })
        .distinctUntilChanged()
        .subscribe(draggableContainerHeight =>
          setMapHeight(Number(draggableContainerHeight))
        );
    }
  }),
  withHandlers({
    onDragStart: ({ history }) => () => history.push("/events"),
    onDragEnd: ({ history, setMapCenter }) => map =>
      setMapCenter(map.getCenter()),

    // TODO: Move to another container
    onNewEvent: ({ history, newEvent }) => () => {
      newEvent();
      history.push("/events/new");
    }
  })
);

export const markerInteractions = compose(
  withRouter,
  connect(selectMarker, { setMapCenter }),
  withHandlers({
    // TODO: Use <Link> instead
    onClick: ({ id, coords, history, setMapCenter }) => () =>
      history.push(`/events/${id}`)
  })
);

export default mapInteractions;
