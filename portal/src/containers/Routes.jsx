import * as React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import Main from '../pages/Main';
import Login from '../pages/Login';
import AuthRoute from './AuthRoute';
// ! Do not change the order in the routes
const Routes = ({ ColorModeContext }) => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <AuthRoute path="/main" ColorModeContext={ColorModeContext} component={Main} />
      {/* new top level routes here!!  */}
      <AuthRoute path="/" ColorModeContext={ColorModeContext}>
        <Redirect to="/main" />
      </AuthRoute>
      <Route path="*">
        <Box p={3}>
          <Box pb={2}>
            <Typography variant="h3" color="inherit">
              Page Not Found (-_-)
            </Typography>
          </Box>
          <Button variant="contained" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </Box>
      </Route>
    </Switch>
  );
};

Routes.propTypes = {
  ColorModeContext: PropTypes.shape({}).isRequired,
};

export default Routes;
