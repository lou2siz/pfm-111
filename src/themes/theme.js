// src/themes/theme.js

import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins'; // Import Poppins font

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
    fontFamily: 'Poppins, Arial, sans-serif', // Use Poppins font
    h4: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12, // Global border radius
  },
});

export default theme;
