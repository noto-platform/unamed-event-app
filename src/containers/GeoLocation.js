import PropTypes from "proptypes";
import { connect } from "react-redux";
import { compose, lifecycle, getContext } from "recompose";

import { locateSuccess, locateFailure } from "store/actions";

const withLocation = compose(
  connect(() => ({}), { locateSuccess, locateFailure }),
  lifecycle({
    componentDidMount() {
      const { locateSuccess, locateFailure, geolocation } = this.props;
      this._id = geolocation.watchPosition(locateSuccess, locateFailure, {
        timeout: 10000
      });
    },
    componentWillUnmount() {
      this.props.geolocation.clearWatch(this._id);
    }
  })
);

export default withLocation(() => null);
