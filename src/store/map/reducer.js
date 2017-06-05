import { set, lensProp, map, merge } from "ramda";
import { handleActions } from "redux-actions";
import { initialState } from "./selectors";

import * as a from "./actions";
import { toLatLng } from "./selectors";

export default handleActions(
  {
    [a.setMapCenter]: (state, { payload }) =>
      set(lensProp("center"), toLatLng(payload))(state),
    [a.setMapZoom]: (state, { payload }) =>
      set(lensProp("zoom"), payload)(state)
  },
  initialState
);
