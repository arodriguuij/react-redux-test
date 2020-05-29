import React, { useEffect } from "react";
import { connect } from "react-redux";

const requireAuth = (ChildComponent) => {
  const ComposedComponent = ({ isLoggedIn, history, ...otherProps }) => {
    useEffect(() => {
      if (!isLoggedIn) history.push("/");
    }, [isLoggedIn, history]);

    return <ChildComponent {...otherProps} />;
  };

  const mapStateToProps = (state) => ({
    isLoggedIn: state.auth,
  });
  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
