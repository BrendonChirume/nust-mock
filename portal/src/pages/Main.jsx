import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { styled, useTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar, { toolbarClasses } from '@material-ui/core/Toolbar';
import { useHistory } from 'react-router-dom';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiDrawer from '@material-ui/core/Drawer';
import MainRoutes from '../containers/MainRoutes';
import { connect } from 'react-redux';
import { signOut } from '../actions/authActions';
import DrawerContent from '../components/main/DrawerContent';
import NavContent from '../components/main/NavContent';

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
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.down('sm')]: {
    width: 0,
  },
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
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
      justifyContent: 'flex-start',
      flexDirection: 'row-reverse',
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
  '& ::-webkit-scrollbar': {
    width: '0.45rem',
  },
  '& ::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
    borderRadius: '0.5rem',
    height: 400,
  },
  '& :hover::-webkit-scrollbar-thumb': {
    backgroundColor: '#c1c1c1',
  },
  '& ::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const drawerWidth = 250;
const options = {
  '/main': 'Dashboard',
  '/main/profile': 'Profile',
  '/main/new-reg': 'New Registration',
  '/main/continuous-asses': 'Continuous Assesment',
  '/main/exam-results': 'Examination Results',
  '/main/time-table': 'Time Table',
  '/main/e-learning': 'E-learning',
  '/main/library': 'Libray',
  '/main/accomodation': 'Accomodation',
  '/main/notices': 'Notices',
  '/main/payments': 'Payments',
};

const Main = (props) => {
  const { ColorModeContext, unAuthenticate } = props;
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState('');
  const history = useHistory();
  const { pathname } = history.location;
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [width, setWidth] = React.useState(window.innerWidth);
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

  React.useEffect(() => setPage(options[pathname]), [pathname]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar position="fixed" open={open}>
        <NavContent
          open={open}
          signOut={handleSignOut}
          handleDrawerToggle={handleDrawerToggle}
          page={page}
        />
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
              zIndex: theme.zIndex.tooltip,
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
        <MainRoutes isMobile={isMobile} />
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
