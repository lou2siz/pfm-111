// src/themes/theme.js

import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins'; // Import Poppins font

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f2ff',
      light: '#33f5ff',
      dark: '#00a9b3',
    },
    secondary: {
      main: '#7928ca',
      light: '#9153d7',
      dark: '#541c8d',
    },
    background: {
      default: '#000000',
      paper: 'rgba(17, 17, 17, 0.8)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    body1: {
      lineHeight: 1.8,
      letterSpacing: '0.01em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 24px',
          transition: 'all 0.3s ease-in-out',
          background: 'linear-gradient(45deg, #00f2ff 30%, #7928ca 90%)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 16px rgba(0, 242, 255, 0.3)',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: 8,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.05)',
            transform: 'translateX(8px)',
          },
        },
      },
    },
  },
});

export default theme;
