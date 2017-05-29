import React from 'react';
import { Provider } from 'react-redux';
import router from './Router';

const App = ({ store }) => (
  <Provider store={store}>
    {router}
  </Provider>
);

export default App;
