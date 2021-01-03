import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const randomClassName = createGenerateClassName({
  productionPrefix: "marketing-",
});

const mount = (element: Element) => {
  ReactDOM.render(
    <StylesProvider generateClassName={randomClassName}>
      <Router>
        <App />
      </Router>
    </StylesProvider>,
    element
  );
};

if (process.env.NODE_ENV === "development") {
  const rootElement = document.querySelector("#marketing-root-dev");
  rootElement && mount(rootElement);
}

export { mount };
