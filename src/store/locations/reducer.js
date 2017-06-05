import { compose, values, set, lensProp, pick, objOf, reverse } from "ramda";
import { handleActions } from "redux-actions";

import { toLatLng } from "store/map/selectors";

import * as a from "./actions";
import { initialState } from "./selectors";

export default handleActions(
  {
    [a.locateSuccess]: (state, { payload }) =>
      set(lensProp("me"), toLatLng(payload))(state)
  },
  initialState
);
