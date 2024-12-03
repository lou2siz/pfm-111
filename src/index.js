// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './themes/theme';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/orbitron';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
