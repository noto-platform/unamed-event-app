import React from "react";
import PropTypes from "proptypes";
import { Provider } from "react-redux";
import router from "./Router";

class Firebase extends React.PureComponent {
  static childContextTypes = {
    firebase: PropTypes.object,
  };

  getChildContext() {
    return {
      firebase: this.props.firebase,
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Firebase;
