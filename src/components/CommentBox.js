import React, { useState } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "./../actions/index";
import requireAuth from "./requireAuth";

const CommentBox = ({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveComment(comment);
    setComment("");
  };
  const handleFetchComments = () => {
    fetchComments();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={comment} onChange={handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={handleFetchComments}>
        Fecth comments
      </button>
    </>
  );
};

const CommentBoxConnected = connect(null, { saveComment, fetchComments })(
  CommentBox
);
export default requireAuth(CommentBoxConnected);
