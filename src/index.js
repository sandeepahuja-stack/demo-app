import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/config/configureStore";
import App from "App";
import "./index.css";

// https://medium.com/geekculture/react-js-architecture-features-folder-structure-design-pattern-70b7b9103f22#7305

const store = configureStore;
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
