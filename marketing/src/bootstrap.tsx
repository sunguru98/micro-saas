import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const mount = (element: Element) => {
  ReactDOM.render(
    <StylesProvider>
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
