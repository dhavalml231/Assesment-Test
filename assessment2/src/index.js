import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducer.js';
import App from './App';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

const AppRoot = () => <Provider store={store}>
    <App />
</Provider>

ReactDOM.render(<AppRoot />, document.getElementById('root'));