import commentsReducer from "./comments";
import { combineReducers } from "redux";
import authReducer from "./auth";

const reducers = combineReducers({
  comments: commentsReducer,
  auth: authReducer,
});

export default reducers;
