import React from 'react';
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { Link, useRouteMatch } from 'react-router-dom';

export default function ResetPassForm() {
  const { url } = useRouteMatch();

  return (
    <Box px={5}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField size="small" fullWidth placeholder="Student Number" />
        </Grid>
        <Grid item xs={12}>
          <TextField size="small" fullWidth placeholder="National ID" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField size="small" fullWidth placeholder="Date" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField size="small" fullWidth placeholder="Month" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField size="small" fullWidth placeholder="Year" />
        </Grid>
      </Grid>
      <Box display="flex" pt={5} justifyContent="space-around" alignItems="center">
        <Link to={url} className="a-cancel">
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            startIcon={<ArrowBack />}
          >
            Log In
          </Button>
        </Link>
        <Button type="submit" variant="contained" size="large" color="primary">
          Reset
        </Button>
      </Box>
    </Box>
  );
}
