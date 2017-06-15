import { createAction } from "redux-actions";

import { updateEntities } from "store/entities/actions";

export const createEvent = createAction("events/CREATE");
export const updateEvent = createAction("events/UPDATE");

export const newEvent = () => (dispatch, getState, { firebase }) => {
  const { auth, map } = getState();

  const create = (type, data) => dispatch(updateEntities(type, { new: data }));

  create("events", {
    title: "New event",
    description: "New description",
    openinghours: "23 - 00",
    lat: map.center[0], // TODO check correct lat/lng
    lng: map.center[1],
    tags: ["new"],
    owner: auth.uid,
    id: "new"
  });
  create("locations", { g: "?", l: map.center });
};
