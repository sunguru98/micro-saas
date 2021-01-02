import React from "react";
import ReactDOM from "react-dom";

const mount = (element: Element) => {
  ReactDOM.render(<h1>Hi there</h1>, element);
};

if (process.env.NODE_ENV === "development") {
  const rootElement = document.querySelector("#marketing-root-dev");
  rootElement && mount(rootElement);
}

export { mount };
