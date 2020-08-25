import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [
    reduxThunk,
];
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middleware)
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);