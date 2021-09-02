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

export default function MainRoutes({ isMobile }) {
  const history = useHistory();
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={DashBoard} />
      <Route path={`${path}/exam-results`} component={ExamResults} />
      <Route
        path={`${path}/new-reg`}
        render={(props) => <Registration {...props} isMobile={isMobile} />}
      />
      <Route path={`${path}/library`} component={Library} />
      <Route path={`${path}/notices`} component={Notices} />
      <Route path={`${path}/payments`} component={Payments} />
      <Route path={`${path}/accomodation`} component={Accomodation} />
      <Route path={`${path}/continuous-asses`} component={ContinuousAssesment} />
      <Route path={`${path}/profile`} component={Profile} />
      <Route path={`${path}/time-table`} component={TimeTable} />
      <Route path={`${path}/settings`} component={SettingsPg} />
      <Route path={`${path}/e-learning`} component={ELearn} />
      <Route path="*">
        <Box>
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
