import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { Router } from "react-router-dom";

import {
  MemoryHistory,
  History,
  createBrowserHistory,
  createMemoryHistory,
  LocationListener,
} from "history";
import App from "./App";

function isMemoryHistory(
  history: History | MemoryHistory
): history is MemoryHistory {
  return (history as MemoryHistory).listen !== undefined;
}

const generateClassName = createGenerateClassName({
  productionPrefix: "auth-",
});

const mount = (
  element: Element,
  {
    defaultHistory,
    onNavigate,
    initialPath,
    onSignIn,
  }: {
    defaultHistory?: History<unknown> | MemoryHistory;
    onNavigate?: LocationListener;
    initialPath?: string;
    onSignIn: (user: { email: string }) => void;
  }
): { onParentNavigate: LocationListener } => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath ?? "/"],
    });
  onNavigate && isMemoryHistory(history) && history.listen(onNavigate);

  ReactDOM.render(
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <App onSignIn={onSignIn} />
      </Router>
    </StylesProvider>,
    element
  );

  return {
    onParentNavigate({ pathname }) {
      history.location.pathname !== pathname && history.push(pathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const rootElement = document.querySelector("#dev-auth-root");
  rootElement &&
    mount(rootElement, {
      defaultHistory: createBrowserHistory(),
      onSignIn(user) {
        console.log("user signed in");
      },
    });
}

export { mount };
