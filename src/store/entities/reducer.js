import { dissocPath, mergeDeepRight } from "ramda";
import { handleActions } from "redux-actions";

import { initialState } from "./selectors";
import * as a from "./actions";

export default handleActions(
  {
    [a.updateEntities]: (state, { payload }) => mergeDeepRight(state, payload),
    [a.removeEntity]: (state, { payload: { type, key } }) =>
      dissocPath([type, key], state)
  },
  initialState
);
