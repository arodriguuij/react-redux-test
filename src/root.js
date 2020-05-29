import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
//import reduxPromise from "redux-promise";
import async from "./middleware/async";
import stateValidator from "./middleware/stateValidator";

const MyProvider = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );
  return <Provider store={store}>{children}</Provider>;
};

export default MyProvider;
