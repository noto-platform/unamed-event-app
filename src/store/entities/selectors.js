import R from "ramda";
import { createSelector } from "reselect";

export const initialState = {};

export const getListOfType = type =>
  createSelector(
    state => state.entities,
    entities => ({
      list: R.values(entities[type])
    })
  );
