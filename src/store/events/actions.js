import { createAction } from "redux-actions";

import { updateEntities } from "store/entities/actions";

export const createEvent = createAction("events/CREATE");
export const updateEvent = createAction("events/UPDATE");

export const newEvent = () => (dispatch, getState, { firebase }) => {
  const { auth, map } = getState();

  const create = (type, data) => dispatch(updateEntities(type, { new: data }));

  create("events", { title: "New event", owner: auth.uid, id: "new" });
  create("locations", { g: "?", l: map.center });
};
