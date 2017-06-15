import React, { PropTypes } from "react";
import { Link } from "react-router-dom";
import { View, Text, StyleSheet, Touchable } from "react-primitives";
import TextInput from "components/common/TextInput";
import DraggableContainer from "components/Events/DraggableContainer";
import styles from "./styles.js";
import containerStyles from "components/Events/DraggableContainer/styles.js";

const EventDetails = ({
  title,
  description,
  lat,
  lng,
  owner,
  openinghours,
  tags = [],
  isOwner,
  onInput,
  fields,
  formErrors,
  onSave
}) => {
  /**
   * No owner id (not fetched yet or not logged in)
   * TODO Will we kick upp login in not logged in here?
   */
  if (!owner) return null;

  const getTextField = (name, value, placeholder, multiline) =>
    isOwner
      ? <TextInput
          key={name}
          value={fields[name]}
          name={name}
          onChange={onInput}
          multiline={multiline}
          placeholder={placeholder}
          style={{
            borderColor: formErrors.find(error => error === name) ? "red" : ""
          }}
        />
      : <Text style={styles.text}>
          {value}
        </Text>;

  return (
    <DraggableContainer
      startHeight={window.innerHeight / 2}
      fullPageEnabled={true}
    >
      <View style={containerStyles.topBar} draggable={true}>
        <Text style={containerStyles.topBarTitle} draggable={true}>
          {title}
        </Text>
        <View style={containerStyles.topBarClose}>
          <Link to="/events" style={{ color: "#fff" }}>
            <i className="fa fa-times" aria-hidden="true" />
          </Link>
        </View>
      </View>
      <View style={[containerStyles.body, containerStyles.scrollable]}>
        <View style={styles.row}>
          <View style={styles.icon}>
            <i className="fa fa-info-circle" aria-hidden="true" />
          </View>
          {getTextField("title", title, "Title on event", false)}
        </View>
        <View style={styles.row}>
          <View style={styles.icon}>
            <i className="fa fa-info-circle" aria-hidden="true" />
          </View>
          {getTextField(
            "description",
            description,
            "Description for event #tags",
            true
          )}
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
          {getTextField("openinghours", openinghours, "23 - 00", false)}
        </View>
        <View>
          {!isOwner
            ? tags.map((tag, id) =>
                <View key={`tag_${id}`} style={styles.tag}>
                  <Text style={styles.tagText}>#{tag}</Text>
                </View>
              )
            : null}
        </View>
        {isOwner
          ? <Touchable onPress={onSave}>
              <View style={styles.saveButton}>
                <Text
                  style={{
                    color: formErrors.length === 0 ? "#000" : "#efe"
                  }}
                >
                  Save
                </Text>
              </View>
            </Touchable>
          : null}
      </View>
    </DraggableContainer>
  );
};

export default EventDetails;
