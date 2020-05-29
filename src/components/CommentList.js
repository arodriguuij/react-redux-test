import React from "react";
import { connect } from "react-redux";

const CommentList = ({ comments }) => {
  console.log(comments);
  const renderComments = () => {
    return comments.map((comment) => <li key={comment}>{comment}</li>);
  };
  return (
    <div>
      <h4>CommentList</h4>
      <ul>{renderComments()}</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);
