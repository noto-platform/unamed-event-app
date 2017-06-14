import React from "react";
import PropTypes from "proptypes";
import { View } from "react-primitives";

class Firebase extends React.PureComponent {
  static childContextTypes = {
    firebase: PropTypes.object
  };

  getChildContext() {
    return {
      firebase: this.props.firebase
    };
  }

  render() {
    return <View>{this.props.children}</View>;
  }
}

export default Firebase;
