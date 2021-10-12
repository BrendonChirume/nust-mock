import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/system';
import { Button, IconButton, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link, useRouteMatch } from 'react-router-dom';

const LogInForm = (props) => {
  const { flagError, removeErros, setLoginDetails, loginDetails } = props;
  const [showPassword, setShowPassword] = React.useState(false);
  const { url } = useRouteMatch();

  const handleChange = (event) => {
    flagError && removeErros();
    return setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Box px={3} width="80%" sx={{ fontFamily: "'Roboto'" }}>
        <Box py={2} width="100%">
          <TextField
            required
            size="small"
            error={flagError}
            value={loginDetails.studentID}
            spellCheck="false"
            fullWidth
            sx={{
              input: { textTransform: 'uppercase', fontFamily: 'inherit' },
              'input::placeholder': { textTransform: 'capitalize' },
            }}
            inputProps={{}}
            name="studentID"
            onChange={handleChange}
            placeholder="Student Number"
            variant="outlined"
          />
        </Box>
        <Box py={2} width="100%">
          <TextField
            type={showPassword ? 'text' : 'password'}
            required
            size="small"
            sx={{
              input: { textTransform: 'uppercase', fontFamily: 'inherit' },
            }}
            error={flagError}
            value={loginDetails.password}
            spellCheck="false"
            fullWidth
            name="password"
            onChange={handleChange}
            placeholder="Password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {!showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              ),
            }}
          />
        </Box>
      </Box>
      <Box>
        <Button type="submit" variant="contained" size="large" color="primary">
          LOG IN
        </Button>
      </Box>
      <Link to={`${url}/reset-password`}>Forgot Password</Link>
    </>
  );
};

LogInForm.propTypes = {
  flagError: PropTypes.bool.isRequired,
  removeErros: PropTypes.func.isRequired,
  setLoginDetails: PropTypes.func.isRequired,
  loginDetails: PropTypes.shape({
    position: PropTypes.string,
    studentID: PropTypes.string,
  }).isRequired,
};

export default LogInForm;
