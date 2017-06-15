import React from "react";
import { Marker } from "react-mapbox-gl";
import { Link } from "react-router-dom";
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
    {/*
      TODO: Use <Link> instead
            Need to recreate all events with id set to key for links to work
            instead of djungeltrummans event id (move to external_id?)
    */}
    <Touchable onPress={onClick}>
      <View style={styles.marker}>
        <Text>{(tags && tags[0]) || "New"}</Text>
      </View>
    </Touchable>
  </Marker>;

export default MapMarker;
