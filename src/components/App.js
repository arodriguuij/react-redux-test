import React from "react";
import { Route, Link } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { connect } from "react-redux";
import { chageAuth } from "../actions/index";

const App = ({ isLoggedIn, chageAuth }) => {
  const renderButton = () =>
    isLoggedIn ? (
      <button onClick={() => chageAuth(false)}>Log out</button>
    ) : (
      <button onClick={() => chageAuth(true)}>Log In</button>
    );

  const renderHeader = () => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post a comment</Link>
      </li>
      <li>{renderButton()}</li>
    </ul>
  );

  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth,
});
export default connect(mapStateToProps, { chageAuth })(App);
