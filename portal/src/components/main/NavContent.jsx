import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Mail, MoreVert, Notifications } from '@material-ui/icons';
import Menu from '@material-ui/icons/Menu';
import UserPopover from './UserPopover';

function NavContent(props) {
  const { page, open, handleDrawerToggle, signOut } = props;

  return (
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
          sx={{ mr: { md: 3 }, ml: { xs: 1, sm: -2 } }}
          onClick={handleDrawerToggle}
        >
          {open ? <MoreVert /> : <Menu />}
        </IconButton>
        <Hidden smDown>
          <Typography variant="h6" noWrap component="div">
            {page}
          </Typography>
        </Hidden>
      </Box>
      <Box sx={{ whiteSpace: 'nowrap' }}>
        <IconButton sx={{ mr: { md: 2 } }} color="inherit">
          <Badge color="secondary" badgeContent={0} showZero>
            <Mail />
          </Badge>
        </IconButton>{' '}
        <IconButton sx={{ mr: { md: 2 } }} color="inherit">
          <Badge color="secondary" badgeContent={0} showZero>
            <Notifications />
          </Badge>
        </IconButton>
        <Hidden smDown>
          <UserPopover signOut={signOut} />
        </Hidden>
      </Box>
      <Hidden smUp>
        <Typography variant="h6" sx={{ width: '100%' }} noWrap component="div">
          {page}
        </Typography>
      </Hidden>
    </Toolbar>
  );
}

NavContent.propTypes = {
  open: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default NavContent;
