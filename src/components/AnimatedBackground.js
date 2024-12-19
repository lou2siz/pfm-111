import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <Box
      component={motion.div}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: 'radial-gradient(circle at 0% 0%, rgba(0, 242, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(255, 0, 128, 0.1) 0%, transparent 50%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(0, 242, 255, 0.1), rgba(255, 0, 128, 0.1))',
          filter: 'blur(100px)',
          animation: 'gradientAnimation 15s ease infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 242, 255, 0.05) 0%, transparent 50%)',
          animation: 'pulseAnimation 10s ease-in-out infinite',
        },
      }}
    />
  );
};

export default AnimatedBackground; 