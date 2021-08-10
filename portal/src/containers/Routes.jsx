import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import Main from '../pages/Main';
import Login from '../pages/Login';
import AuthRoute from './AuthRoute';

function Routes() {
  return (
    <Router>
      <Switch>
        <AuthRoute path="/" component={Main} />
        <Route path="/login" component={Login} />
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
    </Router>
  );
}

export default Routes;
