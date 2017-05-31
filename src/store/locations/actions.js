import { createAction } from "redux-actions";

export const locateSuccess = createAction("locations/LOCATE_SUCCESS");
export const locateFailure = createAction("locations/LOCATE_FAILURE");
