import * as React from 'react';
// import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';
import {
  Alert,
  AlertTitle,
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Refresh } from '@material-ui/icons';
import LightTooltip from '../components/main/LightTooltip';

const accomodation = ['A Building', 'B Building', 'C Building'];
function createData(building, room, fee) {
  return { building, room, fee };
}

const rows = [
  createData('A Building', 159, 450060, 'June Stay 2021'),
  createData('B Building', 237, 9320, 'May/June 2021'),
  createData('C Building', 262, 164540, 'March 2021 Stay'),
];
function Residence(props) {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
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
              sx={{ p: 2 }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6" component="div">
                Current Accomodation
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ px: 2, pt: 2 }}>
              <Alert severity="success">
                <AlertTitle>Application success</AlertTitle>
                Room: 101 C Building
              </Alert>
            </Box>
            <Box sx={{ px: 2, pt: 2 }}>
              <Alert severity="warning">You currently have no Accormodation</Alert>
            </Box>
            <Box sx={{ px: 2, pt: 2 }}>
              <Alert severity="info">Your application is under processing</Alert>
            </Box>
            <Box sx={{ px: 2, pt: 2 }}>
              <Alert severity="error">Applications are closed</Alert>
            </Box>
            <Autocomplete
              size="small"
              disablePortal
              id="residence-select"
              options={accomodation}
              sx={{ width: 300, p: 2 }}
              renderInput={(params) => (
                <TextField {...params} label="Select Residence" />
              )}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
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
              sx={{ p: 2 }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6" component="div">
                Previouse Stays
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
              <TableContainer component={Paper}>
                <Table size="small" sx={{ width: '100%' }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Building</TableCell>
                      <TableCell align="right">Room</TableCell>
                      <TableCell align="right">Fee</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((stay, index) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {stay.building}
                        </TableCell>
                        <TableCell align="right">{stay.room}</TableCell>
                        <TableCell align="right">{stay.fee}</TableCell>
                        <TableCell align="right">
                          <LightTooltip
                            title="Re-apply"
                            placement="top"
                            size="small"
                          >
                            <IconButton>
                              <Refresh />
                            </IconButton>
                          </LightTooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

Residence.propTypes = {};

export default Residence;
