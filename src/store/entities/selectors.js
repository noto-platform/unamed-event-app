import { values } from "ramda";
import { createSelector } from "reselect";

export const initialState = {};

export const entityById = state => id => state[id];

export const getListOfType = type =>
  createSelector(
    state => state.entities,
    entities => ({
      [type]: entities[type] || {}
    })
  );
