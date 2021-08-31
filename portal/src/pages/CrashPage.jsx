import * as React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Button, styled, Typography } from '@material-ui/core';
import { useHistory, withRouter } from 'react-router-dom';

const PREFIX = 'Crashpage';

const classes = {
  root: `${PREFIX}-root`,
  header: `${PREFIX}-header`,
  icon: `${PREFIX}-icon`,
  errorMsg: `${PREFIX}-errorMsg`,
  bold: `${PREFIX}-bold`,
  small: `${PREFIX}-small`,
  content: `${PREFIX}-root`,
  button: `${PREFIX}-button`,
};

const Root = styled((theme) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(20),
  },
  [`& .${classes.header}`]: {
    display: 'flex',
    alignItems: 'center',
  },
  [`& .${classes.icon}`]: {
    fontSize: 70,
  },
  [`& .${classes.errorMsg}`]: {
    marginLeft: theme.spacing(2),
  },
  [`& .${classes.bold}`]: {
    fontWeight: 'bold',
  },
  [`& .${classes.small}`]: {
    fontSize: 'small',
  },
  [`& .${classes.content}`]: {
    marginLeft: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
  [`& .${classes.button}`]: {
    float: 'right',
    margin: theme.spacing(2, 1, 2),
  },
}));

function CrashPage() {
  const history = useHistory();

  const handleReload = () => window.location.reload();

  const handleRedirect = () => {
    history.push('/');
    window.location.reload();
  };

  return (
    <Root>
      <div>
        {' '}
        <div className={classes.header}>
          <ErrorOutlineIcon style={{ fontSize: 70 }} />
          <Typography variant="h4" component="div" className={classes.errorMsg}>
            System Error
          </Typography>
        </div>
        <div className={classes.content}>
          <div className="">
            <p className="text-sentencecase">
              An error occured in the application and your page could not be served
            </p>
            <p className={classes.bold}>Try reloading the page</p>
            <ul>
              <li>
                <p className={classes.small}>
                  Contact System administrator for assistence if the propblem
                  persists
                </p>
              </li>
            </ul>
          </div>
          <div>
            <Button
              onClick={handleReload}
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Reload
            </Button>
            <Button
              onClick={handleRedirect}
              className={classes.button}
              variant="contained"
            >
              Home
            </Button>
          </div>
        </div>
      </div>
    </Root>
  );
}
export default withRouter(CrashPage);
