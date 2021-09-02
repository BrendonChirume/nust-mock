import * as React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { connect } from 'react-redux';
import Routes from './Routes';
import ErrorBoundary from './ErrorBoundary';
import DisplayUtilities from './DisplayUtilities';
import { handleModal } from '../actions/actionCreator';
import { BrowserRouter as Router } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const NustStudentPortal = (props) => {
  const { toggleModal, modalData } = props;
  const [mode, setMode] = React.useState(
    useMediaQuery('(prefers-color-scheme: dark)')
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => setMode(!mode),
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: !mode ? 'dark' : 'light',
          primary: {
            main: '#0a1929',
          },
          secondary: {
            main: blue[700],
          },
          background: {
            paper: '#222b36',
          },
        },
      }),
    [mode]
  );
  return (
    <Router>
      <ErrorBoundary>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <Routes ColorModeContext={ColorModeContext} />
            <DisplayUtilities handleModal={toggleModal} modalData={modalData} />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </ErrorBoundary>
    </Router>
  );
};

const mapDispatchToProps = {
  toggleModal: handleModal,
};

const mapStateToProps = ({ modalData }) => ({ modalData });

NustStudentPortal.propTypes = {
  modalData: PropTypes.shape({
    show: PropTypes.string,
  }).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NustStudentPortal);
