import { set, lensProp, pick } from "ramda";
import { handleActions } from "redux-actions";

import * as a from "./actions";
import { initialState } from "./selectors";

export default handleActions(
  {
    [a.locateSuccess]: (state, { payload }) =>
      set(
        lensProp("me"),
        pick(["accuracy", "latitude", "longitude"] /* from */, payload),
      )(/* with */state),
  },
  initialState,
);
