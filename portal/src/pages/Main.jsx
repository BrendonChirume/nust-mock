import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { Badge, styled, useTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar, { toolbarClasses } from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiDrawer from '@material-ui/core/Drawer';
import MainRoutes from '../containers/MainRoutes';
import UserPopover from '../components/main/UserPopover';
import { connect } from 'react-redux';
import { signOut } from '../actions/authActions';
import DrawerContent from '../components/main/DrawerContent';
import { MoreVert, Notifications } from '@material-ui/icons';

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  color: theme.palette.text.primary,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.background.appBar
      : theme.palette.background.paper,
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  color: theme.palette.text.primary,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.background.appBar
      : theme.palette.background.paper,
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.down('sm')]: {
    width: 0,
  },
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const NavBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, isMobile }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'rgb(32 46 60)',
  [`& .${toolbarClasses.root}`]: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
      flexDirection: 'initial',
    },
  },
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open &&
    !isMobile && {
      marginLeft: drawerWidth,
      backgroundColor: 'rgb(32 46 60)',
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
}));

const BrowserDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const drawerWidth = 240;
const Main = (props) => {
  const { ColorModeContext, unAuthenticate } = props;
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState('');
  const history = useHistory();
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [width, setWidth] = React.useState();
  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  const isMobile = width <= 768;

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleSignOut = () => {
    unAuthenticate(() => () => history.push('/login'));
  };
  const handlePageChange = (pg) => setPage(pg);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar position="fixed" open={open}>
        {isMobile ? (
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              {page}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconButton sx={{ mx: { xs: 2 } }} color="inherit">
                <Badge color="secondary" badgeContent={0} showZero>
                  <Notifications />
                </Badge>
              </IconButton>{' '}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                {open ? <MoreVert /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        ) : (
          <Toolbar>
            <Box
              sx={{
                display: 'flex',
                whiteSpace: 'nowrap',
                alignItems: 'center',
                color: 'text.primary',
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ mr: { md: 3 } }}
                onClick={handleDrawerToggle}
              >
                {open ? <MoreVert /> : <MenuIcon />}
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                {page}
              </Typography>
            </Box>
            <Box display="flex">
              {isMobile ? <UserPopover /> : undefined}
              <IconButton color="inherit">
                <Badge color="secondary" badgeContent={0} showZero>
                  <Notifications />
                </Badge>
              </IconButton>{' '}
            </Box>
          </Toolbar>
        )}
      </NavBar>
      <Box component="nav" aria-label="mailbox folders">
        {isMobile ? (
          <MuiDrawer
            variant="temporary"
            open={open}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              zIndex: theme.zIndex.drawer + 2,
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            <DrawerContent
              isMobile={isMobile}
              open={open}
              colorMode={colorMode}
              handleSignOut={handleSignOut}
              handlePageChange={handlePageChange}
            />
          </MuiDrawer>
        ) : (
          <BrowserDrawer variant="permanent" open={open}>
            <DrawerContent
              isMobile={isMobile}
              open={open}
              colorMode={colorMode}
              handleSignOut={handleSignOut}
              handlePageChange={handlePageChange}
            />
          </BrowserDrawer>
        )}
      </Box>
      <Box
        component="main"
        sx={{ height: '100%', width: '100%', flexGrow: 1, p: 2 }}
      >
        <Toolbar />
        <MainRoutes />
      </Box>
    </Box>
  );
};

Main.propTypes = {
  unAuthenticate: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  unAuthenticate: signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
