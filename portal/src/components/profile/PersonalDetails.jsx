import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import { Create, Save } from '@material-ui/icons';

export default function PersonalDetails(props) {
  const { toggleModal } = props;
  return (
    <Box
      boxShadow={2}
      sx={{
        bgcolor: 'background.paper',
        width: '100%',
        borderRadius: 1,
      }}
    >
      <Box
        display="flex"
        sx={{ px: 2, py: 1 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" component="div">
          Profile
        </Typography>
        <IconButton
          size="large"
          onClick={() =>
            toggleModal({
              show: 'modal',
              title: 'Edit Details',
              open: true,
              children: (
                <Grid component="form" container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField size="small" fullWidth label="Name" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField size="small" fullWidth label="Surname" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      size="small"
                      type="date"
                      fullWidth
                      label="Date of Birth"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField size="small" fullWidth label="National ID" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField size="small" fullWidth label="Gender" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField size="small" fullWidth label="Religion" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField size="small" fullWidth label="Marital Status" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField size="small" fullWidth label="Citizenship" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField size="small" fullWidth label="Place of Birth" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField size="small" fullWidth label="Permanent Residence" />
                  </Grid>
                  <Box sx={{ px: 3, pt: 3 }}>
                    <Button
                      variant="contained"
                      startIcon={<Save />}
                      color="secondary"
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              ),
            })
          }
        >
          <Create />
        </IconButton>
      </Box>
      <Divider />
      <Grid container sx={{ p: 2 }}>
        <Grid item xs={6} md={3}>
          Firstname(s) :
        </Grid>
        <Grid item xs={6} md={3}>
          Heather
        </Grid>

        <Grid item xs={6} md={3}>
          Surname:
        </Grid>
        <Grid item xs={6} md={3}>
          Bope
        </Grid>
        <Grid item xs={6} md={3}>
          Date of Birth:
        </Grid>
        <Grid item xs={6} md={3}>
          25 March 1997
        </Grid>
        <Grid item xs={6} md={3}>
          National ID:
        </Grid>
        <Grid item xs={6} md={3}>
          63-2128754-W-32
        </Grid>
        <Grid item xs={6} md={3}>
          Gender:
        </Grid>
        <Grid item xs={6} md={3}>
          Female
        </Grid>
        <Grid item xs={6} md={3}>
          Religion:
        </Grid>
        <Grid item xs={6} md={3}>
          --
        </Grid>
        <Grid item xs={6} md={3}>
          Marital Status:
        </Grid>
        <Grid item xs={6} md={3}>
          --
        </Grid>
        <Grid item xs={6} md={3}>
          Citizenship:
        </Grid>
        <Grid item xs={6} md={3}>
          Zimbabwe
        </Grid>
        <Grid item xs={6} md={3}>
          Place of Birth:
        </Grid>
        <Grid item xs={6} md={3}>
          Harare
        </Grid>
        <Grid item xs={6} md={3}>
          Permanent Residence:
        </Grid>
        <Grid item xs={6} md={3}>
          Zimbabwe
        </Grid>
      </Grid>
    </Box>
  );
}

PersonalDetails.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
