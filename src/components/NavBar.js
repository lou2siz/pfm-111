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
      color="primary"
      elevation={4}
      sx={{
        borderRadius: 2,
        margin: '10px',
        padding: '0 10px',
        background: 'linear-gradient(45deg, #0d47a1 30%, #42a5f5 90%)',
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
