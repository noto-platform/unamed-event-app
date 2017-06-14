import React from "react";
import PropTypes from "proptypes";
import { View } from "react-primitives";

const EventCreator = ({ onCreate }) =>
  <View>
    <View onClick={onCreate}>Create</View>
  </View>;

export default EventCreator;
