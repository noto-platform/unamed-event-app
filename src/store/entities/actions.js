import { createAction } from "redux-actions";

export const updateFailure = createAction("entities/FAILURE");
export const updateEntities = createAction("entities/UPDATE", (key, data) => ({
  [key]: data
}));
