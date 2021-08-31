import * as React from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function UserPopover({ signOut }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const PREFIX = 'popper';
  const classes = {
    link: `${PREFIX}-link`,
  };
  const Anchor = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    display: 'block',
    width: '100%',
    padding: theme.spacing(0.25, 8, 0.25, 2),
  }));

  return (
    <>
      <IconButton
        disableRipple
        disableFocusRipple
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <Avatar sx={{ width: 35, height: 35 }} alt="Remy Sharp" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography variant="body1" sx={{ p: 2, minWidth: 210 }}>
          Brendon Chirume
        </Typography>
        <Divider />
        <List dense>
          <ListItemButton sx={{ px: 0 }}>
            <Anchor to="/" className={classes.link}>
              <ListItemText primary="Profile" />
            </Anchor>
          </ListItemButton>
          <ListItemButton sx={{ px: 0 }}>
            <Anchor to="/settings">
              <ListItemText primary="Settings" />
            </Anchor>
          </ListItemButton>
          <ListItemButton sx={{ pr: { md: 5 } }} onClick={signOut}>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Popover>
    </>
  );
}

UserPopover.propTypes = {
  signOut: PropTypes.func.isRequired,
};
