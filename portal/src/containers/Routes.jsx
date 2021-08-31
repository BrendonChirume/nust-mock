import * as React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import Main from '../pages/Main';
import Login from '../pages/Login';
import AuthRoute from './AuthRoute';

function Routes({ ColorModeContext }) {
  return (
    <Switch>
      <AuthRoute path="/" ColorModeContext={ColorModeContext} component={Main} />
      <Route exact path="/login" component={Login} />
      <Route path="*">
        <div className="center">
          <Box pb={2}>
            <Typography variant="h3">Page Not Found (-_-)</Typography>
          </Box>
          <Button variant="contained" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </Route>
    </Switch>
  );
}

Routes.propTypes = {
  ColorModeContext: PropTypes.shape({}).isRequired,
};

export default Routes;
