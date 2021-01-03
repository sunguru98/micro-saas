import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { Router } from "react-router-dom";
import { createMemoryHistory, LocationListener } from "history";

import App from "./App";

const randomClassName = createGenerateClassName({
  productionPrefix: "marketing-",
});

const mount = (
  element: Element,
  { onNavigate }: { onNavigate?: LocationListener }
) => {
  const memoryHistory = createMemoryHistory();

  onNavigate && memoryHistory.listen(onNavigate);

  ReactDOM.render(
    <StylesProvider generateClassName={randomClassName}>
      <Router history={memoryHistory}>
        <App />
      </Router>
    </StylesProvider>,
    element
  );
};

if (process.env.NODE_ENV === "development") {
  const rootElement = document.querySelector("#marketing-root-dev");
  rootElement && mount(rootElement, {});
}

export { mount };
