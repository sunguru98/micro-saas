import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const randomClassName = createGenerateClassName({
  productionPrefix: "container-",
});

ReactDOM.render(
  <StylesProvider generateClassName={randomClassName}>
    <Router>
      <App />
    </Router>
  </StylesProvider>,
  document.querySelector("#root")
);
