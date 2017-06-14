import React, { PropTypes } from "react";
import { Link } from "react-router-dom";
import { View, Text, StyleSheet } from "react-primitives";
import DraggableContainer from "components/Events/DraggableContainer";
import styles from "./styles.js";
import containerStyles from "components/Events/DraggableContainer/styles.js";

const EventDetails = ({
  title,
  description,
  lat,
  lng,
  openinghours,
  tags = [],
  onCancel
}) =>
  <DraggableContainer
    startHeight={window.innerHeight / 2}
    fullPageEnabled={true}
  >
    <View style={containerStyles.topBar} draggable={true}>
      <Text style={containerStyles.topBarTitle} draggable={true}>{title}</Text>
      <View style={containerStyles.topBarClose}>
        <Link to="/events">
          <i className="fa fa-times" aria-hidden="true" />
        </Link>
      </View>
    </View>
    <View style={containerStyles.body}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <i className="fa fa-info-circle" aria-hidden="true" />
        </View>
        <Text style={styles.text}>{description}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.icon}>
          <i className="fa fa-map-marker" aria-hidden="true" />
        </View>
        <Text style={styles.text}>{lat} - {lng}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.icon}>
          <i className="fa fa-clock-o" aria-hidden="true" />
        </View>
        <Text style={styles.text}>{openinghours}</Text>
      </View>
      <View>
        {tags.map((tag, id) =>
          <View key={`tag_${id}`} style={styles.tag}>
            #{tag}
          </View>
        )}
      </View>
    </View>
  </DraggableContainer>;

export default EventDetails;
