import { createAction } from "redux-actions";

export const updateEntities = createAction("entities/UPDATE", (key, data) => ({
  [key]: data
}));
