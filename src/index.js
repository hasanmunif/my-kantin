import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Home from "/MyKantin/Home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  rootElement
);
