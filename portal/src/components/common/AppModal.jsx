import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: { xs: '90%', md: 560 },
  maxHeight: '80%',
  overflowY: { xs: 'auto', md: 'hidden' },
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 2,
  p: 2,
};

export default function AppModal({ open, title, handleClose, children }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton
          sx={{ position: 'absolute', right: 8, top: 10 }}
          aria-label="close"
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>

        <Typography component="div" sx={{ mt: 2 }}>
          {children}
        </Typography>
      </Box>
    </Modal>
  );
}
