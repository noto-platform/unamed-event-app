import React from 'react';
import { Provider } from 'react-redux';
import router from './Router';

import Firebase from "./Firebase";

const App = ({ store, firebase }) => (
  <Provider store={store}>
    <Firebase firebase={firebase}>
      {router}
    </Firebase>
  </Provider>
);

export default App;
