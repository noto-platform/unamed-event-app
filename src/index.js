import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configure';

import App from "./containers/App";
import firebase from "./services/firebase";

const store = configureStore();

ReactDOM.render(<App store={store} firebase={firebase} />, document.getElementById('root'));
registerServiceWorker();
