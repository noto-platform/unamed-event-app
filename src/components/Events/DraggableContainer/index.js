import React, { PropTypes } from "react";
import { View, Animated, StyleSheet } from "react-primitives";
import DraggableInteractions from "containers/DraggableInteractions";
import styles from "./styles.js";

const DraggableContainer = ({ positionBottom, setPosition, children }) => {
  const handleMobileKeyboard = () => setPosition(window.innerHeight / 4);
  // This was causing <Link> to prevent default. Fix when making create event.
  //onFocus={handleMobileKeyboard}

  return (
    <Animated.View
      id="wrapper"
      style={[styles.wrapper, { bottom: positionBottom }]}
    >
      {children}
    </Animated.View>
  );
};

export default DraggableInteractions(DraggableContainer);
