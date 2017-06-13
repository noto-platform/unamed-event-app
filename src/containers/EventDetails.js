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

import { withRouter } from "react-router";
import { FORM_ACTION_UPDATE, FORM_ACTION_CREATE } from "store/constants";
import { selectAuth } from "store/auth/selectors";
import { pickProviderId } from "store/auth/reducer";
import { getMyLocation } from "store/locations/selectors";
import { setInitialFormState } from "store/events/selectors";
import { isEventOwner, getEventById } from "store/events/selectors";
const t = require("tcomb-validation");

/**
 * TODO
 * Just uncommented the code below for now. Will be used in Create / Edit
 * and so on.
 */

//
// /**
//  * Form validation
//  * TODO Add this somewhere else?
//  */
// const correctStringInput = val => val.length > 0;
// const isNumber = val => Number.isInteger(parseInt(val));
// const ValidationSchema = t.struct({
//   title: t.refinement(t.String, correctStringInput),
//   desc: t.refinement(t.String, correctStringInput),
//   start_time: t.refinement(t.Any, isNumber),
//   end_time: t.refinement(t.Any, isNumber)
// });
//
// export const formInput = compose(
//   getContext({ firebase: PropTypes.object }),
//   withRouter,
//   connect(selectAuth),
//   connect(getMyLocation),
//   withState("validForm", "setValidation", false),
//   withState("fields", "setFields", setInitialFormState),
//   withHandlers({
//     onInput: ({ fields, setFields, setValidation }) => ({ target }) => {
//       const newValues = { ...fields, [target.name]: target.value };
//       setValidation(t.validate(newValues, ValidationSchema).isValid());
//       setFields(newValues);
//     },
//     cancelForm: ({ history }) => () => history.replace("/events/_")
//   })
// );
//
// export const create = compose(
//   withHandlers({
//     onSubmit: props => event => {
//       event.preventDefault();
//       const { auth, fields, me, validForm } = props;
//       validForm
//         ? console.log("Create", {
//             // TODO Send to firebase
//             ...fields,
//             lat: me[0],
//             lng: me[1],
//             owner: pickProviderId(auth)
//           })
//         : console.log("Not valid");
//     }
//   })
// );
//
// export const update = compose(
//   withRouter,
//   withHandlers({
//     onSubmit: props => event => {
//       event.preventDefault();
//       const { auth, fields, me, validForm } = props;
//       validForm
//         ? console.log("Update", {
//             // TODO Send to firebase
//             ...fields,
//             lat: me[0],
//             lng: me[1],
//             owner: pickProviderId(auth)
//           })
//         : console.log("Not valid");
//     }
//   }),
//   lifecycle({
//     componentDidMount() {
//       const { firebase, match, setFields, auth, history } = this.props;
//
//       /**
//        * TODO
//        * Should we add this in redux instead ?
//        * One problem is when the user goes directly in to update. I think we
//        * need to make sure that the auth check is performed before,
//        */
//       firebase
//         .database()
//         .ref("/events/" + match.params.id)
//         .once("value")
//         .then(snapshot => snapshot.val())
//         .then(
//           event =>
//             isEventOwner(event.owner, auth)
//               ? setFields(event)
//               : history.replace("/events")
//         );
//     }
//   })
// );
//
// /**
//  * TODO
//  * Connect this with delete button on detail view.
//  */
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
