import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import MyProvider from "./Root";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <MyProvider>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </MyProvider>,
  document.querySelector("#root")
);
