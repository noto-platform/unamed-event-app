import R from "ramda";
import { createSelector } from "reselect";

export const initialState = {};

export const makeSelectEntities = entity =>
  createSelector(
    state => state.entities,
    state => ({
      list: R.values(state[entity]),
    }),
  );
