import { createTheme } from '@mui/material/styles';
import '@fontsource/libre-baskerville';
import '@fontsource/source-sans-pro';

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
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  },
  typography: {
    fontFamily: '"Source Sans Pro", Arial, sans-serif',
    h1: {
      fontFamily: '"Libre Baskerville", Georgia, serif',
      fontWeight: 700,
      fontSize: {
        xs: '1.75rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '3rem'
      },
      lineHeight: 1.3,
      letterSpacing: '0.01em',
    },
    h2: {
      fontFamily: '"Libre Baskerville", Georgia, serif',
      fontWeight: 700,
      fontSize: {
        xs: '1.5rem',
        sm: '1.75rem',
        md: '2rem',
        lg: '2.5rem'
      },
      lineHeight: 1.3,
      letterSpacing: '0.01em',
    },
    h3: {
      fontFamily: '"Libre Baskerville", Georgia, serif',
      fontWeight: 600,
      fontSize: {
        xs: '1.25rem',
        sm: '1.5rem',
        md: '1.75rem',
        lg: '2rem'
      },
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Libre Baskerville", Georgia, serif',
      fontWeight: 600,
      fontSize: {
        xs: '1.125rem',
        sm: '1.25rem',
        md: '1.5rem',
        lg: '1.75rem'
      },
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: '"Source Sans Pro", Arial, sans-serif',
      fontSize: {
        xs: '0.9375rem',
        sm: '1rem',
        md: '1.0625rem',
        lg: '1.125rem'
      },
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    body2: {
      fontFamily: '"Source Sans Pro", Arial, sans-serif',
      fontSize: {
        xs: '0.875rem',
        sm: '0.9375rem',
        md: '1rem',
        lg: '1.0625rem'
      },
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    button: {
      fontFamily: '"Source Sans Pro", Arial, sans-serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'none',
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
          paddingLeft: {
            xs: '16px',
            sm: '24px',
            md: '32px'
          },
          paddingRight: {
            xs: '16px',
            sm: '24px',
            md: '32px'
          },
          maxWidth: {
            xs: '100%',
            sm: '600px',
            md: '960px',
            lg: '1280px',
            xl: '1536px'
          }
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          spacing: {
            xs: 2,
            sm: 3,
            md: 4
          }
        }
      }
    }
  },
});

export default theme;
