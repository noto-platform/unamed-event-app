import { createAction } from "redux-actions";

export const createEvent = createAction("events/CREATE");
export const updateEvent = createAction("events/UPDATE");
export const viewEvent = createAction("events/VIEW");
