import React from "react";
import { Marker } from "react-mapbox-gl";
import styled from "styled-components";
import color from "open-color";
import { View, Touchable, StyleSheet, Text } from "react-primitives";

const styles = StyleSheet.create({
  marker: {
    width: 30,
    height: 30,
    backgroundColor: color.red[5],
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9
  }
});

const MapMarker = ({ coords, tags, onClick }) =>
  <Marker coordinates={coords}>
    <Touchable onPress={onClick}>
      <View style={styles.marker}>
        <Text>{(tags && tags[0]) || "New"}</Text>
      </View>
    </Touchable>
  </Marker>;

export default MapMarker;
