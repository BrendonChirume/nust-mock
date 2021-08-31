import React from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import Registration from '../pages/Registration';
import DashBoard from '../pages/DashBoard';
import TimeTable from '../pages/TimeTable';
import SettingsPg from '../pages/Settings';
import ELearn from '../pages/ELearn';
import ExamResults from '../pages/ExamResults';
import ContinuousAssesment from '../pages/ContinuousAssesment';
import Profile from '../pages/Profile';
import Library from '../pages/Library';
import Notices from '../pages/Notices';
import Accomodation from '../pages/Accomodation';
import Payments from '../pages/Payments';

export default function MainRoutes() {
  const { path } = useRouteMatch();
  const history = useHistory();
  return (
    <Switch>
      <Route exact path={path} component={Profile} />
      <Route path={`/exam-results`} component={ExamResults} />
      <Route path={`/new-reg`} component={Registration} />
      <Route path={`/library`} component={Library} />
      <Route path={`/notices`} component={Notices} />
      <Route path={`/payments`} component={Payments} />
      <Route path={`/accomodation`} component={Accomodation} />
      <Route path={`/continuous-asses`} component={ContinuousAssesment} />
      <Route path={`/dashboard`} component={DashBoard} />
      <Route path={`/time-table`} component={TimeTable} />
      <Route path={`/settings`} component={SettingsPg} />
      <Route path={`/e-learning`} component={ELearn} />
      <Route path="*">
        <Box className="center">
          <Typography variant="h4">Page Not Found (-_-)</Typography>
          <Box pt={3}>
            <Button variant="contained" onClick={history.goBack}>
              Go Back
            </Button>
          </Box>
        </Box>
      </Route>
    </Switch>
  );
}
