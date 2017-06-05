import { compose, values, set, lensProp, pick, objOf, reverse } from "ramda";

export const initialState = {
  zoom: [14],
  center: [11.9656, 57.6959]
};

export const selectMap = (state, { match: { params: { id } } }) => ({
  ...state.map,
  event: (state.entities.locations || {})[id]
});
export const selectMarker = null;

export const toLatLng = obj =>
  obj.length === 2 // already array, do nothing
    ? obj
    : compose(reverse, values, pick(["lat", "lng", "latitude", "longitude"]))(
        obj
      );
