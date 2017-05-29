import React, { Component, PropTypes } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

class FirebaseDebug extends Component {
  static propTypes = {
    events: PropTypes.object,
    firebase: PropTypes.object,
  };

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return null;
    const { firebase, events } = this.props;
  }
}
const mapStateToProps = state => state;

export default compose(
  connect(mapStateToProps)
)(FirebaseDebug);
