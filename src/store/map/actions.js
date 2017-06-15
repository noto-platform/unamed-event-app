import { createAction } from "redux-actions";

export const setMapCenter = createAction("map/SET_CENTER");
export const setMapZoom = createAction("map/SET_ZOOM");
export const queryMap = createAction("map/QUERY");
