import * as React from 'react';
import { Avatar, Box, styled } from '@material-ui/core';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearErrors, signIn } from '../actions/authActions';
import LogInForm from '../components/login/LogInForm';
import ResetPassForm from '../components/login/ResetPassForm';

const PREFIX = 'nustPortalLogin';
const classes = {
  formContent: `${PREFIX}-formContent`,
  root: `${PREFIX}-root`,
  avatar: `${PREFIX}-avatar`,
  bunner: `${PREFIX}-bunner`,
};

const Root = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
  },
  [`& .${classes.avatar}`]: {
    width: 'fit-content',
    height: 'auto',
    '& > img': { WebkitUserDrag: 'none' },
  },
  [`& .${classes.img}`]: {
    width: '100%',
    height: 'auto',
  },
  [`& .${classes.bunner}`]: {
    height: '100%',
    width: '65%',
    background:
      'url("https://www.nust.ac.zw/images/campuslife/open-door-carou.jpg") no-repeat',
    backgroundSize: 'cover',
  },
  [`& .${classes.formContent}`]: {
    width: '35%',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 0, 2),
      width: '100%',
    },
    padding: theme.spacing(7, 0, 2),
    backgroundColor: theme.palette.mode === 'dark' ? '#222b36' : '#f9f9f9',
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Login = ({ authenticate, flagError, removeErros }) => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const [loginDetails, setLoginDetails] = React.useState({
    position: '',
    studentID: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginDetails.password.length > 0 && loginDetails.studentID.length > 0) {
      authenticate(loginDetails, () => history.replace('/'));
    }
  };

  return (
    <Root component="div" height="100%" className={classes.root}>
      <Box
        component="form"
        className={classes.formContent}
        boxShadow={3}
        justifyContent="space-between"
        autoComplete="on"
        autoCorrect="off"
        onSubmit={handleSubmit}
        noValidate
      >
        <Box display="inline-block">
          <Avatar
            alt="nust logo"
            variant="square"
            src="https://www.nust.ac.zw/images/headers/nust-web-logo3.jpg"
            className={classes.avatar}
          />
        </Box>
        <Switch>
          <Route
            exact
            path={path}
            render={(props) => (
              <LogInForm
                {...props}
                flagError={flagError}
                setLoginDetails={setLoginDetails}
                removeErros={removeErros}
                loginDetails={loginDetails}
              />
            )}
          />
          <Route exact path={`${path}/reset-password`} component={ResetPassForm} />
        </Switch>
        <Box color="text.secondary" fontSize={14}>
          NUST © 2021. All Rights Reserved.
        </Box>
      </Box>
      <Box
        className={classes.bunner}
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
      />
    </Root>
  );
};

const mapStateToProps = ({ auth }) => ({
  flagError: auth.errorDetails,
});

const mapDispatchToProps = {
  authenticate: signIn,
  removeErros: clearErrors,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
  removeErros: PropTypes.func.isRequired,
  flagError: PropTypes.bool.isRequired,
};
