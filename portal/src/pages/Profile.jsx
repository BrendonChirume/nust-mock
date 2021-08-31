import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  Avatar,
  Box,
  Button,
  DialogActions,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { Create } from '@material-ui/icons';
import { handleModal } from '../actions/actionCreator';
import { MobileDatePicker } from '@material-ui/lab';

export const Profile = (props) => {
  const { toggleModal } = props;
  const [dateValue, setDateValue] = React.useState(new Date());
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = ({ children, index }) => value === index && children;

  return (
    <Box>
      <Tabs
        sx={{ mb: 3, fontWeight: 600 }}
        value={value}
        textColor="secondary"
        onChange={handleChange}
        variant="scrollable"
        TabIndicatorProps={{
          style: {
            backgroundColor: '#0178bc',
          },
        }}
        scrollButtons="auto"
      >
        <Tab label="Personal Details" />
        <Tab label="Contact Details" />
        <Tab label="Security" />
      </Tabs>
      <TabPanel index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Box
              boxShadow={2}
              sx={{
                textAlign: 'center',
                bgcolor: 'background.paper',
                width: '100%',
                borderRadius: 1,
                p: 3,
              }}
            >
              <Box
                sx={{
                  p: 0.8,
                  borderRadius: '100%',
                  width: 'fit-content',
                  mx: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px dashed ${theme.palette.divider}`,
                }}
              >
                <Avatar sx={{ width: 95, mx: 'auto', height: 95 }} />
              </Box>
              <Typography variant="body1" sx={{ p: 2, mx: 'auto' }}>
                Brendon Chirume
              </Typography>
              <Button
                variant="text"
                color="secondary"
                sx={{
                  textTransform: 'capitalize',
                  display: 'inline-block',
                  mx: 'auto',
                }}
              >
                Remove Picture
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
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
                            {/* <MobileDatePicker
                              label="Date of Birth"
                              value={dateValue}
                              onChange={(newValue) => {
                                setDateValue(newValue);
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            />
                            <MobileDatePicker
                              label="For mobile"
                              value={dateValue}
                              onChange={(newValue) => {
                                setDateValue(newValue);
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            /> */}
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
                            <TextField
                              size="small"
                              fullWidth
                              label="Marital Status"
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField size="small" fullWidth label="Citizenship" />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              size="small"
                              fullWidth
                              label="Place of Birth"
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              size="small"
                              fullWidth
                              label="Permanent Residence"
                            />
                          </Grid>
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
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel index={1}>Item Two</TabPanel>
      <TabPanel index={2}>
        <Box
          component="form"
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
              Change Password
            </Typography>
          </Box>
          <Divider />
          <Grid container px={2} py={3} spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                size="medium"
                autoFocus
                required
                spellCheck="false"
                fullWidth
                name="password"
                placeholder="Password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                size="medium"
                required
                spellCheck="false"
                fullWidth
                name="passwordconfirm"
                placeholder="Password Confirmation"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Divider />
          <DialogActions>
            <Button variant="contained" color="secondary">
              Change Password
            </Button>
          </DialogActions>
        </Box>
      </TabPanel>
    </Box>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  toggleModal: handleModal,
};

Profile.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
