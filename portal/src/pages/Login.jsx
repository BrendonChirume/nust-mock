import * as React from 'react';
import {
  Button,
  Avatar,
  Box,
  TextField,
  styled,
  IconButton,
  Grid,
} from '@material-ui/core';
import { Link, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearErrors, signIn } from '../actions/authActions';
import { ArrowBack, Visibility, VisibilityOff } from '@material-ui/icons';

const PREFIX = 'nustPortalLogin';
const classes = {
  formContent: `${PREFIX}-formContent`,
  root: `${PREFIX}-root`,
  avatar: `${PREFIX}-avatar`,
  forgotPass: `${PREFIX}-forgotPass`,
  img: `${PREFIX}-img`,
  button: `${PREFIX}-button`,
  bunner: `${PREFIX}-bunner`,
  erroText: `${PREFIX}-erroText`,
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
  [`& .${classes.forgotPass}`]: {
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontSize: theme.typography.pxToRem(18),
  },
  [`& .${classes.bunner}`]: {
    height: '100%',
    width: '65%',
    background:
      'url("https://www.nust.ac.zw/images/campuslife/open-door-carou.jpg") no-repeat',
    backgroundSize: 'cover',
  },

  [`& .${classes.button}`]: {
    display: 'block',
    width: theme.spacing(14),
    margin: theme.spacing(2),
  },
  [`& .${classes.erroText}`]: {
    visibility: 'hidden',
  },
  [`& .${classes.formContent}`]: {
    width: '35%',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 0, 2),
      width: '100%',
    },
    padding: theme.spacing(7, 0, 2),
    backgroundColor: '#f9f9f9',
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Login = ({ authenticate, flagError, removeErros }) => {
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = React.useState(false);
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

  React.useEffect(() => {}, [flagError]);

  const handleChange = (event) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
    return flagError && removeErros();
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const ResetPassForm = () => (
    <Box px={5}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField size="small" fullWidth placeholder="Student Number" />
        </Grid>
        <Grid item xs={12}>
          <TextField size="small" fullWidth placeholder="National ID" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField size="small" fullWidth placeholder="Date" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField size="small" fullWidth placeholder="Month" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField size="small" fullWidth placeholder="Year" />
        </Grid>
      </Grid>
      <Box display="flex" pt={5} justifyContent="space-around" alignItems="center">
        <Link to={url} className="a-cancel">
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            startIcon={<ArrowBack />}
          >
            Log In
          </Button>
        </Link>
        <Button type="submit" variant="contained" size="large" color="primary">
          Reset
        </Button>
      </Box>
    </Box>
  );
  const LogInForm = () => (
    <>
      <Box px={3} width="80%">
        <Box py={2} width="100%">
          <TextField
            type="text"
            size="medium"
            autoFocus
            required
            error={flagError}
            value={loginDetails.studentID}
            spellCheck="false"
            fullWidth
            name="studentID"
            onChange={handleChange}
            placeholder="Student Number"
            variant="outlined"
          />
        </Box>
        <Box py={2} width="100%">
          <TextField
            type={showPassword ? 'text' : 'password'}
            size="medium"
            autoFocus
            required
            error={flagError}
            value={loginDetails.password}
            spellCheck="false"
            fullWidth
            pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {!showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
        </Box>
      </Box>
      <Box>
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
        >
          LOG IN
        </Button>
      </Box>
      <Link className={classes.forgotPass} to={`${url}/reset-password`}>
        Forgot Password
      </Link>
    </>
  );

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
          <Route exact path={path} component={LogInForm} />
          <Route path={`${path}/reset-password`} component={ResetPassForm} />
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
