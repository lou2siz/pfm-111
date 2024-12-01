// src/components/NavBar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Passionfruit Media
        </Typography>
        <Button color="inherit" component={Link} to="/">
          About Us
        </Button>
        <Button color="inherit" component={Link} to="/initiatives">
          Our Initiatives
        </Button>
        <Button color="inherit" component={Link} to="/partnerships">
          Our Partnerships
        </Button>
        <Button color="inherit" component={Link} to="/why-we-do-what-we-do">
          Why We Do What We Do
        </Button>
        <Button color="inherit" component={Link} to="/who-we-are">
          Who We Are
        </Button>
        <Button color="inherit" component={Link} to="/media-companies">
          Our Media Companies
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
