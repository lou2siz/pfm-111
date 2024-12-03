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
      main: '#33f5ff',
      light: '#66f7ff',
      dark: '#00d6e6',
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
      purple: '#33f5ff',
      darkGlass: 'rgba(17, 17, 17, 0.9)',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: {
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 700,
      fontSize: {
        xs: '2rem',
        sm: '2.5rem',
        md: '3rem',
        lg: '3.5rem'
      },
      letterSpacing: '0.05em',
    },
    h2: {
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 700,
      fontSize: {
        xs: '1.75rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem'
      }
    },
    body1: {
      fontSize: {
        xs: '0.875rem',
        sm: '1rem',
        md: '1.1rem'
      },
      lineHeight: 1.6
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '10px 24px',
          transition: 'all 0.3s ease-in-out',
          background: 'linear-gradient(45deg, #00f2ff 30%, #33f5ff 90%)',
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
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: {
            xs: '8px',
            sm: '16px',
            md: '24px'
          }
        }
      }
    }
  },
});

export default theme;
