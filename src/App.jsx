import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import lightTheme from './styles/main-theme';
import store from './store';
import Router from './routing/router';

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline>
      <ReduxProvider store={store}>
        <Router />
      </ReduxProvider>
    </CssBaseline>
  </ThemeProvider>
);

export default App;
