import * as React from 'react';
import { createTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';
import Routes from './Routes';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function NustStudentPortal() {
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
            main: '#202e3c',
          },
          background: {
            paper: '#0a1929',
          },
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes ColorModeContext={ColorModeContext} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
