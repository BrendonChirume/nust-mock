import * as React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  useTheme,
} from '@material-ui/core';
import LightTooltip from './LightTooltip';
import Logout from '@material-ui/icons/Logout';
import { Box, styled } from '@material-ui/system';
import {
  Assessment,
  Brightness4,
  Brightness7,
  Dashboard,
  History,
  HowToReg,
  LibraryBooks,
  Person,
  School,
} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const DrawerHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
const PREFIX = 'Main';
const classes = {
  logout: `${PREFIX}-logout`,
  drawer: `${PREFIX}-drawer`,
  list: `${PREFIX}-list`,
  toolbar: `${PREFIX}-toolbar`,
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
      color: theme.palette.text.primary,
    },
  },
  [`& .${classes.list}`]: {
    height: '100%',
  },
  [`& .${classes.listItemIcon}`]: {
    [theme.breakpoints.up('md')]: {
      minWidth: 57,
      color: theme.palette.text.primary,
      paddingLeft: theme.spacing(0.8),
      marginLeft: theme.spacing(0.3),
    },
  },
  [`& .${classes.logout}`]: {
    position: 'sticky',
    bottom: theme.spacing(2),
  },
  [`& .${classes.toolbar}`]: {
    justifyContent: 'space-between',
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row-reverse',
    },
  },
  [`& .${classes.listItemLink}`]: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
}));
const DrawerContent = ({
  handlePageChange,
  handleSignOut,
  colorMode,
  open,
  isMobile,
}) => {
  const theme = useTheme();

  const options = [
    {
      page: 'Profile',
      href: '/',
      icon: Person,
    },
    {
      page: 'Dashboard',
      href: '/dashboard',
      icon: Dashboard,
    },
    {
      page: 'New Registration',
      href: '/new-reg',
      icon: HowToReg,
    },
    {
      page: 'Continuous Assesment',
      href: '/continuous-asses',
      icon: Assessment,
    },
    {
      page: 'Examination Results',
      href: '/exam-results',
      icon: LibraryBooks,
    },
    {
      page: 'Time Table',
      href: '/time-table',
      icon: History,
    },
    {
      page: 'E-learning',
      href: '/e-learning',
      icon: School,
    },
  ];
  return (
    <Root>
      <DrawerHeader sx={{ margin: '0 auto' }}>
        <Avatar
          alt="nust logo"
          variant="square"
          src="https://www.nust.ac.zw/images/headers/nust-web-logo3.jpg"
          sx={{
            width: 'fit-content',
            height: 55,
            '& > img': { WebkitUserDrag: 'none' },
          }}
        />
      </DrawerHeader>
      <Divider />
      <List className={classes.list}>
        {options.map((opt) => {
          const Icon = opt.icon;
          return (
            <LightTooltip
              key={opt.href}
              placement="right"
              xs={{
                display: { sm: 'none', md: 'block' },
              }}
              title={!isMobile && open ? '' : opt.page}
            >
              <ListItem
                className={classes.listItem}
                button
                onClick={() => handlePageChange(opt.page)}
              >
                <NavLink
                  className={classes.listItemLink + ' a-cancel'}
                  to={opt.href}
                >
                  <ListItemIcon className={classes.listItemIcon}>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={opt.page} />
                </NavLink>
              </ListItem>
            </LightTooltip>
          );
        })}
        <ListItem className={classes.logout} button onClick={handleSignOut}>
          <ListItemIcon className={classes.listItemIcon}>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
        <Box sx={{ position: 'sticky', bottom: 0, mb: 1, width: '100%' }}>
          <ListItem button onClick={colorMode.toggleColorMode}>
            <ListItemIcon className={classes.listItemIcon}>
              {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </ListItemIcon>
          </ListItem>
        </Box>
      </List>
    </Root>
  );
};

export default DrawerContent;
