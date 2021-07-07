import React from 'react';
import { Router } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import { AppProvider } from './hooks';
import Routes from './routes';
import history from './services/history';
import { theme } from './styles/theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AppProvider>
    </ChakraProvider>
  );
}
