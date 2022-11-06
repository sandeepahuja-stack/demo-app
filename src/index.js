import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { BrowserRouter } from "react-router-dom";

// https://medium.com/geekculture/react-js-architecture-features-folder-structure-design-pattern-70b7b9103f22#7305

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
