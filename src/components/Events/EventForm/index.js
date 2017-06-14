/**
 * TODO Not used ATM
 */

import React from "react";
import containerStyle from "components/Events/DraggableContainer/style.js";
import { View, Text } from "react-primitives";
import {
  FORM_ACTION_UPDATE,
  FORM_ACTION_CREATE
} from "../../../store/constants";
import DraggableContainer from "../DraggableContainer";

const EventDetails = ({
  fields,
  onSubmit,
  onInput,
  cancelForm,
  match,
  validForm,
  me,
  center
}) => {
  console.log(center);
  return (
    <DraggableContainer fullPageEnabled={false}>
      <View style={containerStyle.topBar}>
        <Text style={containerStyle.topBarTitle}>New Event!</Text>
      </View>

      <View style={containerStyle.body}>
        {/* Fix common TextInput component like React Natives
          <input placeholder="Test title" type="text" />
        */}
      </View>
    </DraggableContainer>
  );
};

/**
 * TODO
 * Add datepickers for start and end time
 * Add max attendes field?
 */

// <form onSubmit={onSubmit}>
//   <h4>
//     {match.params.action === "create" ? "Create event" : "Update event"}
//   </h4>
//   <p>
//     <input
//       type="text"
//       name="title"
//       placeholder="Title"
//       value={fields.title}
//       onChange={onInput}
//     />
//   </p>
//   <p>
//     <textarea
//       type="text"
//       name="desc"
//       placeholder="Description"
//       rows="5"
//       value={fields.desc}
//       onChange={onInput}
//     />
//   </p>
//   <p>
//     <input
//       type="number"
//       name="start_time"
//       placeholder="Start time"
//       value={fields.start_time}
//       onChange={onInput}
//     />
//     <input
//       type="number"
//       name="end_time"
//       placeholder="End time"
//       value={fields.end_time}
//       onChange={onInput}
//     />
//   </p>
//   <p>
//     <button type="submit" disabled={!validForm}>
//       {match.params.action === "create" ? "Create" : "Update"}
//     </button>
//     <button type="button" onClick={cancelForm}>Cancel</button>
//   </p>
// </form>;

export default EventDetails;
