// src/themes/theme.js

import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins';
import '@fontsource/orbitron'; // Add futuristic font for headings

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
      paper: 'rgba(17, 17, 17, 0.9)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    custom: {
      neon: '#00f2ff',
      purple: '#7928ca',
      darkGlass: 'rgba(17, 17, 17, 0.9)',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: {
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    h2: {
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 600,
      letterSpacing: '0.03em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '10px 24px',
          transition: 'all 0.3s ease-in-out',
          background: 'linear-gradient(45deg, #00f2ff 30%, #7928ca 90%)',
          fontFamily: 'Orbitron, sans-serif',
          border: '1px solid rgba(0, 242, 255, 0.3)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 20px rgba(0, 242, 255, 0.5)',
            border: '1px solid rgba(0, 242, 255, 0.8)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(17, 17, 17, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 242, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 0 30px rgba(0, 242, 255, 0.2)',
            border: '1px solid rgba(0, 242, 255, 0.3)',
          },
        },
      },
    },
  },
});

export default theme;
