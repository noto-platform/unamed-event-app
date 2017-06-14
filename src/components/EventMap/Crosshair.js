import React from "react";
import styled from "styled-components";
import { View, StyleSheet, Touchable, Text } from "react-primitives";
import color from "open-color";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "50vh",
    width: "100%",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  point: {
    width: 30,
    height: 30,
    borderWidth: 3,
    borderColor: color.gray[7],
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: "50%"
  }
});

const Crosshair = ({ position }) =>
  <View
    style={[styles.container, { height: `${window.innerHeight - position}px` }]}
    pointerEvents={"none"}
  >
    <View style={styles.point} />
  </View>;

export default Crosshair;
