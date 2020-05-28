import commentsReducer from "./comments";
import { combineReducers } from "redux";

const reducers = combineReducers({
  comments: commentsReducer,
});

export default reducers;
