import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { Router } from "react-router-dom";
import {
  createMemoryHistory,
  LocationListener,
  createBrowserHistory,
  MemoryHistory,
  History,
} from "history";

import App from "./App";

const randomClassName = createGenerateClassName({
  productionPrefix: "marketing-",
});

function isMemoryHistory(
  history: History | MemoryHistory
): history is MemoryHistory {
  return (history as MemoryHistory).listen !== undefined;
}

const mount = (
  element: Element,
  {
    onNavigate,
    defaultHistory,
  }: { onNavigate?: LocationListener; defaultHistory?: History<unknown> }
): { onParentNavigate: LocationListener } => {
  const memoryHistory = defaultHistory || createMemoryHistory();

  onNavigate &&
    isMemoryHistory(memoryHistory) &&
    memoryHistory.listen(onNavigate);

  ReactDOM.render(
    <StylesProvider generateClassName={randomClassName}>
      <Router history={memoryHistory}>
        <App />
      </Router>
    </StylesProvider>,
    element
  );

  return {
    onParentNavigate({ pathname }) {
      memoryHistory.location.pathname !== pathname &&
        memoryHistory.push(pathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const rootElement = document.querySelector("#marketing-root-dev");
  rootElement && mount(rootElement, { defaultHistory: createBrowserHistory() });
}

export { mount };
