import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistedStore from "./store";

import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fontawesome";

ReactDOM.render(
  <Provider store={persistedStore().store}>
    <PersistGate loading={null} persistor={persistedStore().persistors}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("react-container") // eslint-disable-line no-undef
);

// eslint-disable-line no-undef
if (module.hot) module.hot.accept(); // eslint-disable-line no-undef
