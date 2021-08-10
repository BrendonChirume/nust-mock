import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    authenticated: state.admin.authenticated
  };
};

const AuthRoute = ({ component: Component,path,showToast, authenticated,auth, ...rest }) => {
  if (auth) {
    return (
      <Route
      path={path}
      showToast={showToast}
        {...rest}
        render={props =>
          authenticated === true ? (
            <Redirect to="/" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  } else {
    return (
      <Route
        {...rest}
        path={path}
        showToast={showToast}
        render={props =>
          authenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
};

export default connect(mapStateToProps, null)(AuthRoute);
