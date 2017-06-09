import PropTypes from "proptypes";
import { connect } from "react-redux";
import {
  compose,
  lifecycle,
  getContext,
  mapProps,
  onlyUpdateForKeys
} from "recompose";

import { locateSuccess, locateFailure } from "store/actions";
import { selectMap } from "store/map/selectors";

const withNearbySearch = compose(
  connect(selectMap, { locateSuccess, locateFailure }),
  getContext({ firebase: PropTypes.object }),
  // onlyUpdateForKeys(["coords"]),
  mapProps(props => ({
    ...props,
    geoquery: props.firebase.geo.query({
      center: props.center,
      radius: 30
    })
  })),
  lifecycle({
    componentDidMount() {
      const { center, firebase, geoquery } = this.props;

      // TODO:
      // Why doesn't it find any entries?
      // Add update handlers
      geoquery.on("key_exited", (key, loc, distance) => {
        console.log(key, loc, distance);
      });
      geoquery.on("key_entered", (key, loc, distance) => {
        console.log(key, loc, distance);
      });
      geoquery.on("key_moved", (key, loc, distance) => {
        console.log(key, loc, distance);
      });
    },
    componentWillReceiveProps({ center, geoquery }) {
      geoquery.updateCriteria({
        center,
        radius: 30
      });
    },
    componentWillUnMount() {
      const { geoquery } = this.props;

      // TODO: remove update handlers
      geoquery.off("key_entered", (key, loc, distance) => {
        console.log(key, loc, distance);
      });
      geoquery.off("key_exited", (key, loc, distance) => {
        console.log(key, loc, distance);
      });
    }
  })
);

export default withNearbySearch;
