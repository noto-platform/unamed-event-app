import { compose, values, set, lensProp, pick, objOf, reverse } from "ramda";
import { handleActions } from "redux-actions";

import * as a from "./actions";
import { initialState } from "./selectors";

const toLatLng = compose(values, pick(["latitude", "longitude"]));

export default handleActions(
  {
    [a.locateSuccess]: (state, { payload }) =>
      set(lensProp("me"), toLatLng(payload))(state)
  },
  initialState
);
