import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import configureStore from './store/configure';

const store = configureStore();
console.log(store)

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
