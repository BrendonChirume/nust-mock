import * as React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  ListItemButton,
} from '@material-ui/core';
import LightTooltip from './LightTooltip';
import Logout from '@material-ui/icons/Logout';
import { Box, styled } from '@material-ui/system';
import {
  Announcement,
  Assessment,
  Dashboard,
  History,
  Home,
  HowToReg,
  LibraryBooks,
  LocalLibrary,
  Payment,
  Person,
  School,
} from '@material-ui/icons';
import { NavLink, useHistory } from 'react-router-dom';

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
  drawer: `${PREFIX}-drawer`,
  list: `${PREFIX}-list`,
  toolbar: `${PREFIX}-toolbar`,
  listItem: `${PREFIX}-listitem`,
  listItemIcon: `${PREFIX}-listItemIcon`,
  listItemLink: `${PREFIX}-listItemLink`,
};
const Root = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    height: '100%',
  },
  [`& .${classes.listItem}`]: {
    padding: 0,
    '&.Mui-selected': {
      backgroundColor: '#0178bc',
    },
    '& > a': {
      padding: theme.spacing(1, 2),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      color: theme.palette.text.primary,
    },
  },
  [`& .${classes.listItemIcon}`]: {
    [theme.breakpoints.up('md')]: {
      minWidth: 50,
      color: theme.palette.text.primary,
    },
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
    page: 'Payments',
    href: '/payments',
    icon: Payment,
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
    page: 'Libray',
    href: '/library',
    icon: LocalLibrary,
  },
  {
    page: 'E-learning',
    href: '/e-learning',
    icon: School,
  },
  {
    page: 'Accomodation',
    href: '/accomodation',
    icon: Home,
  },
  {
    page: 'Notices',
    href: '/notices',
    icon: Announcement,
  },
];
const DrawerContent = ({ handlePageChange, handleSignOut, open, isMobile }) => {
  const history = useHistory();
  const { pathname } = history.location;
  const [selectedIndex, setSelectedIndex] = React.useState('');

  const handleClick = (page, selected) => {
    handlePageChange(page);
    setSelectedIndex(selected);
  };

  React.useEffect(() => setSelectedIndex(pathname), [pathname]);
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
        {options.map((opt, index) => {
          const Icon = opt.icon;
          return (
            <LightTooltip
              key={opt.href}
              placement="right"
              title={!isMobile && open ? '' : opt.page}
            >
              <ListItemButton
                selected={selectedIndex === opt.href}
                className={classes.listItem}
                onClick={() => handleClick(opt.page, opt.href)}
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
              </ListItemButton>
            </LightTooltip>
          );
        })}
        <ListItem onClick={handleSignOut}>
          <ListItemIcon className={classes.listItemIcon}>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Root>
  );
};

export default DrawerContent;
