import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "scenes/AppWrapper";
import {HashRouter} from "react-router-dom";
import "./index.scss";
import setupStore from "store/configureStore";
import {Provider} from "react-redux";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <AppWrapper />
    </HashRouter>
  </Provider>,
);
