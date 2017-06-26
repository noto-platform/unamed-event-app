import { partial } from "ramda";
import { createAction } from "redux-actions";

export const updateFailure = createAction("entities/FAILURE");
export const updateEntities = createAction("entities/UPDATE");
export const removeEntity = createAction("entities/REMOVE");
