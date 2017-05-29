import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configure';

import App from "./containers/App";

const store = configureStore();

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
