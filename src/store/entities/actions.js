import { partial } from "ramda";
import { createAction } from "redux-actions";

export const updateFailure = createAction("entities/FAILURE");
export const updateEntities = createAction("entities/MERGE", (type, data) => ({
  [type]: data
}));

export const removeEntity = createAction("entities/REMOVE", (type, key) => ({
  type,
  key
}));
