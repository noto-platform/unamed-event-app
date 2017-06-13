import { pickAuth, pickProviderId } from "../auth/reducer";

export const initialState = {};

export const setInitialFormState = {
  title: "",
  desc: "",
  max_attendees: "",
  start_time: "",
  end_time: ""
};

export const isEventOwner = (owner, auth) => pickProviderId(auth) === owner;

export const getEventById = (events, id) =>
  Object.keys(events).map(key => events[key]).find(item => item.id === id);
