import React from "react";
import styled from "styled-components";
import color from "open-color";
import { View, StyleSheet, Touchable, Text } from "react-primitives";

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    zIndex: 10,
    width: 60,
    height: 60,
    bottom: 60,
    right: 60,
    backgroundColor: color.gray[0],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9
  },
  buttonText: {
    color: color.gray[9],
    fontSize: 24,
    borderRadius: 3
  }
});

const FloatingActionButton = ({ text, onClick, positionBottom }) =>
  <Touchable onPress={onClick}>
    <View style={[styles.button, { bottom: `${positionBottom || 60}px` }]}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </Touchable>;

export default FloatingActionButton;
