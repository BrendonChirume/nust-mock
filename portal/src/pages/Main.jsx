import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { Button, ListItemIcon, styled } from '@material-ui/core';
import Home from './Home';
import ExamResults from './ExamResults';
import LogoutIcon from '@material-ui/icons/Logout';

const drawerWidth = 240;
const PREFIX = 'Main';
const classes = {
  logout: `${PREFIX}-logout`,
  listItem: `${PREFIX}-listitem`,
  listItemIcon: `${PREFIX}-listItemIcon`,
  listItemLink: `${PREFIX}-listItemLink`,
};

const Root = styled(Box)(({ theme }) => ({
  [`& .${classes.listItem}`]: {
    padding: 0,
    '& > a': {
      padding: theme.spacing(1, 2),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
  },
  [`& .${classes.listItemIcon}`]: {
    [theme.breakpoints.down('xl')]: {
      minWidth: 40,
      paddingLeft: theme.spacing(0.5),
    },
  },
  [`& .${classes.logout}`]: {
    position: 'sticky',
    bottom: theme.spacing(2),
  },
  [`& .${classes.listItemLink}`]: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
}));

function Main(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { path } = useRouteMatch();
  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const options = [
    {
      page: 'Dashboard',
      href: `/dashboard`,
    },
    {
      page: 'New Registration',
      href: `/new-reg`,
    },
    {
      page: 'Examination Results',
      href: `/exam-results`,
    },
    {
      page: 'Time Table',
      href: `/time-table`,
    },
    {
      page: 'E-learning',
      href: `/e-learning`,
    },
    {
      page: 'Settings',
      href: `/settings`,
    },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {options.map((opt) => (
          <ListItem className={classes.listItem} button key={opt.href}>
            <NavLink className={classes.listItemLink + ' a-cancel'} to={opt.href}>
              <ListItemText primary={opt.page} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" fontWeight="bold" noWrap component="div">
            NUST STUDENT PORTAL
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
          <ListItem className={classes.logout} button>
            <ListItemIcon className={classes.listItemIcon}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
          <ListItem className={classes.logout} button>
            <ListItemIcon className={classes.listItemIcon}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Switch>
          <Route exact path={path} component={Home} />
          <Route path={`/exam-results`} component={ExamResults} />

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
      </Box>
    </Root>
  );
}

Main.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Main;
