import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { firebaseConfig } from "../config";
import reducer from "./reducer";

import firebase from "../services/firebase";

export default function configureStore(initialState = {}) {
  const middlewares = [
    thunk.withExtraArgument({ firebase }),
    logger
  ]
  const store = createStore(reducer, applyMiddleware(...middlewares));

  return store;
}
