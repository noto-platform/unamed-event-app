import PropTypes from "proptypes";
import { connect } from "react-redux";
import {
  compose,
  lifecycle,
  getContext,
  withHandlers,
  withState,
  mapProps
} from "recompose";
import * as R from "ramda";

import { selectAuth } from "store/auth/selectors";
import { pickProviderId } from "store/auth/reducer";
import { setInitialFormState } from "store/events/selectors";
import { isEventOwner, getEventById } from "store/events/selectors";
import ValidationSchema from "store/events/model";
const t = require("tcomb-validation");

export const eventDetails = compose(
  connect(selectAuth),
  mapProps(({ ...props }) => ({
    ...props,
    isOwner: isEventOwner(props.owner, props.auth)
  }))
);

export const formInput = compose(
  withState("formErrors", "setValidation", ["default"]),
  withState("fields", "setFields", setInitialFormState),
  withHandlers({
    onInput: ({ fields, setFields, setValidation }) => ({ target }) => {
      const newValues = { ...fields, [target.name]: target.value || "" };

      setValidation(
        R.compose(
          R.flatten,
          R.map(error => error.path),
          R.flatten,
          R.props(["errors"])
        )(t.validate(newValues, ValidationSchema))
      );

      setFields(newValues);
    },
    onSave: ({ id, formErrors, fields, auth }) => () => {
      if (!formErrors.length) {
        const tags = getTags(fields.description);

        // TODO send to firebase
        alert(
          JSON.stringify(
            {
              action: id === "new" ? "CREATE" : "UPDATE",
              ...fields,
              owner: auth.uid,
              description: removeTagsFromString(fields.description, tags),
              tags
            },
            null,
            2
          )
        );
      }
    },
    setDefaultEvent: ({
      title,
      description,
      openinghours,
      setFields,
      tags = []
    }) => () =>
      setFields({
        title,
        description: description + getTagsAsString(tags),
        openinghours
      })
  }),
  lifecycle({
    componentDidMount() {
      const { setDefaultEvent, owner } = this.props;
      if (owner) setDefaultEvent();
    },
    componentDidUpdate(prevProps) {
      const { setDefaultEvent } = this.props;
      if (prevProps.owner !== this.props.owner) setDefaultEvent();
    }
  })
);

/**
 * TODO probably move this to other location
 */

function getTagsAsString(tags) {
  let tagString = "";
  tags.forEach(tag => {
    tagString += ` #${tag}`;
  });
  return tagString;
}

function removeTagsFromString(string, tags) {
  let cleanString = string;
  tags.forEach(tag => {
    cleanString = cleanString
      .replace(tag, "")
      .replace("#", "")
      .replace("  ", " ");
  });
  return cleanString;
}

function getTags(string) {
  return string.match(/\#[a-zA-ZåäöÅÄÖ]+/gi).map(tag => tag.replace("#", ""));
}

/**
 * TODO
 * Connect this with delete button on detail view.
 */
// export const withDelete = compose(
//   getContext({ firebase: PropTypes.object }),
//   withHandlers({
//     onConfirm: ({ item, onCancel }) => () => {
//       // TODO sent to firebase / call EventCRUD prop
//       console.log("DELETE EVENT", item);
//       onCancel(); // close modal after delete
//     }
//   })
// );
