import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./components/App/redux/reducers";

import "./css/style.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line no-undef

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-container") // eslint-disable-line no-undef
);

// eslint-disable-line no-undef
if (module.hot) module.hot.accept(); // eslint-disable-line no-undef
