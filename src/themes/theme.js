// src/themes/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1', // Customize primary color
    },
    secondary: {
      main: '#ff6f00', // Customize secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
    h4: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
});

export default theme;
