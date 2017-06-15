import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { firebaseConfig } from "../config";
import rootReducer from "./reducers";

import mapMiddleware from "store/map/middleware";

console.log(mapMiddleware);

const configureStore = (initialState = {}, { firebase }) => {
  const middlewares = [
    thunk.withExtraArgument({ firebase }),
    mapMiddleware(firebase)
  ];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
