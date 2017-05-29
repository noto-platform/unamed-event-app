import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { firebaseConfig } from "../config";
import firebase from "../services/firebase";
import rootReducer from './reducers';


const configureStore = () => {
  const middlewares = [thunk.withExtraArgument({ firebase })];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
