import * as React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({ component: Component, authStatus = true, ...rest }) => {
  const { ColorModeContext, ...other } = rest;
  return (
    <Route
      {...other}
      render={(props) =>
        authStatus ? (
          <Component {...props} ColorModeContext={ColorModeContext} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = ({ auth }) => ({ authStatus: auth.authStatus });

export default connect(mapStateToProps, null)(AuthRoute);

AuthRoute.propTypes = {
  authStatus: PropTypes.bool.isRequired,
  // component: PropTypes.oneOfType([
  //   PropTypes.array,
  //   PropTypes.object,
  //   PropTypes.element,
  // ]).isRequired,
};
