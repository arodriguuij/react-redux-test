import { SAVE_COMMENT, FETCH_COMMENTS } from "./types";
import axios from "axios";

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = () => {
  const response = axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};
