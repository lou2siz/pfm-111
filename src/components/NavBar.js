// src/components/NavBar.js

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'About Us', link: '/' },
    { text: 'Our Initiatives', link: '/initiatives' },
    { text: 'Our Partnerships', link: '/partnerships' },
    { text: 'Why We Do What We Do', link: '/why-we-do-what-we-do' },
    { text: 'Who We Are', link: '/who-we-are' },
    { text: 'Our Media Companies', link: '/media-companies' },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: '#e3f2fd',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 242, 255, 0.1)',
        color: '#000000',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 242, 255, 0.5), transparent)',
        },
        '& .MuiButton-root': {
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(90deg, rgba(0, 242, 255, 0.05), rgba(121, 40, 202, 0.05))',
          borderRadius: '8px',
          padding: { xs: '6px 12px', md: '8px 16px' },
          margin: { xs: '4px', md: '0 8px' },
          transition: 'all 0.3s ease-in-out',
          fontWeight: 'bold',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          fontSize: { xs: '0.875rem', md: '1rem' },
          '&:hover': {
            background: 'linear-gradient(90deg, rgba(0, 242, 255, 0.1), rgba(121, 40, 202, 0.1))',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, #00f2ff, #7928ca)',
            transform: 'scaleX(0)',
            transition: 'transform 0.3s ease-in-out',
            transformOrigin: 'right',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
            transformOrigin: 'left',
          },
        },
        p: { xs: 1, md: 2 },
      }}
    >
      <Toolbar disableGutters>
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
            flexGrow: { xs: 1, md: 0 },
            marginLeft: 2,
          }}
        >
          <Box
            component="img"
            src="/logo1.png"
            alt="Logo"
            sx={{ height: 40, marginRight: 1 }}
          />
          <Typography variant="h6" noWrap>
            Passionfruit Media
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="open navigation menu"
              onClick={handleMenuOpen}
              sx={{ marginLeft: 'auto', marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.text}
                  onClick={handleMenuClose}
                  component={Link}
                  to={item.link}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ marginLeft: 'auto', marginRight: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.link}
                sx={{ marginLeft: 1 }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
