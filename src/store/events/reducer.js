import { handleActions } from "redux-actions";

import * as a from "./actions";
import { initialState } from "./selectors";

export default (state = initialState) => state;
