import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// REDUX
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//reducer
import { rootReducer } from './reducers/index'

//Router
import {BrowserRouter as Router } from 'react-router-dom';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    rootElement
);
