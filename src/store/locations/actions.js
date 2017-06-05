import { createAction } from "redux-actions";
import { setMapCenter } from "store/map/actions";

export const locateSuccess = createAction("locations/LOCATE_SUCCESS");
export const locateFailure = createAction("locations/LOCATE_FAILURE");
