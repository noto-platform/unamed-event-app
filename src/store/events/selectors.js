import { pickAuth, pickProviderId } from "../auth/reducer";

export const initialState = {};

export const setInitialFormState = {
  title: "",
  description: "",
  max_attendees: "",
  openinghours: ""
};

export const isEventOwner = (owner, auth) => auth.uid === owner;

export const getEventById = (events, id) =>
  Object.keys(events).map(key => events[key]).find(item => item.id === id);
