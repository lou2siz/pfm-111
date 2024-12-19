// src/components/NavBar.js

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => {
  const [activeRoute, setActiveRoute] = useState('');
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  const navItems = [
    { path: '/', label: 'About' },
    { path: '/initiatives', label: 'Initiatives' },
    { path: '/partnerships', label: 'Partners' },
    { path: '/media-companies', label: 'Media' },
    { path: '/who-we-are', label: 'Team' },
    { path: '/why-we-do-what-we-do', label: 'Why' },
  ];

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 242, 255, 0.1)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', px: { xs: 1, sm: 2 } }}>
        <Box 
          sx={{ 
            display: 'flex', 
            gap: { xs: 1, sm: 2 },
            overflow: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                component={Link}
                to={item.path}
                sx={{
                  color: activeRoute === item.path ? '#00f2ff' : 'rgba(255, 255, 255, 0.7)',
                  minWidth: isMobile ? 'auto' : '100px',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  px: { xs: 1, sm: 2 },
                  position: 'relative',
                  '&:hover': {
                    color: '#00f2ff',
                  },
                }}
              >
                {item.label}
                {activeRoute === item.path && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: '#00f2ff',
                      boxShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
                    }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
