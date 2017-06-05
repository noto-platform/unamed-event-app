import { createAction } from "redux-actions";

export const setMapCenter = createAction("map/SET_MAP_CENTER");
export const setMapZoom = createAction("map/SET_MAP_ZOOM");
export const queryMap = createAction("map/QUERY_MAP");
