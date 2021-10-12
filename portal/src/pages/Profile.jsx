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
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { handleModal } from '../actions/actionCreator';
import Course from '../components/profile/Course';
import PersonalDetails from '../components/profile/PersonalDetails';

const tabs = ['Personal Details', 'Courses', 'Contact Details', 'Security'];

const Profile = (props) => {
  const { toggleModal } = props;
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
        {tabs.map((tab) => (
          <Tab key={tab} label={tab} />
        ))}
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
            <PersonalDetails toggleModal={toggleModal} />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel index={1}>
        <Course />
      </TabPanel>
      <TabPanel index={3}>
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
