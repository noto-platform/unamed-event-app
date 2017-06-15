import { mapObjIndexed, values } from "ramda";
import React, { PropTypes } from "react";
import { Link } from "react-router-dom";
import { View, Text, StyleSheet } from "react-primitives";
import { isEventOwner } from "store/events/selectors";
import DraggableContainer from "../DraggableContainer";
import containerStyles from "../DraggableContainer/styles.js";
import styles from "./styles.js";

const EventList = ({ events, auth, history }) => {
  return (
    <View>
      <DraggableContainer fullPageEnabled={true} scrollEnabled={true}>
        <View style={containerStyles.topBar} draggable={true}>
          <Text style={containerStyles.topBarTitle} draggable={true}>
            {Object.keys(events).length} upcoming events!
          </Text>
        </View>

        <View style={[containerStyles.body, containerStyles.scrollable]}>
          {values(
            mapObjIndexed(
              (item, id) =>
                <View style={styles.listItem} key={id}>
                  <Link to={`/events/${id}`}>
                    <Text>{item.title}</Text>
                  </Link>
                </View>,
              events
            )
          )}
        </View>
      </DraggableContainer>
    </View>
  );
};

export default EventList;
