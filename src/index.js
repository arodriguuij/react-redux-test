import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import MyProvider from "./root";

ReactDOM.render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.querySelector("#root")
);
