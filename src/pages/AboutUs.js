// src/pages/AboutUs.js

import React from 'react';
import { Container, Typography, Grid, Box, useTheme } from '@mui/material';
import NeonBox from '../components/shared/NeonBox';
import GradientText from '../components/shared/GradientText';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container 
      maxWidth="lg" 
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{ 
        mt: { xs: 2, md: 8 }, 
        mb: { xs: 2, md: 8 },
        px: { xs: 2, sm: 3, md: 4 },
        position: 'relative',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 242, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <Grid container spacing={4}>
        {/* Header Section */}
        <Grid item xs={12} textAlign="center" component={motion.div} variants={itemVariants}>
          <GradientText 
            variant="h1" 
            sx={{ 
              mb: { xs: 2, md: 5 },
              fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
              fontWeight: 700,
              textShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
              fontFamily: theme.typography.h1.fontFamily,
            }}
          >
            About Us
          </GradientText>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: { xs: 3, md: 6 },
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              px: { xs: 2, sm: 0 },
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              mx: 'auto',
              fontFamily: theme.typography.body1.fontFamily,
            }}
          >
            Pioneering the future of media through technology and truth
          </Typography>
        </Grid>

        {/* Mission Section */}
        <Grid item xs={12} md={6} component={motion.div} variants={itemVariants}>
          <NeonBox
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography 
                variant="h4" 
                gutterBottom
                sx={{
                  color: 'primary.main',
                  textShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
                  mb: 3,
                  fontFamily: theme.typography.h1.fontFamily,
                }}
              >
                Our Mission
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: theme.typography.body1.fontFamily,
                }}
              >
                At <strong style={{ color: '#00f2ff' }}>Passionfruit Media</strong>, 
                we leverage cutting-edge technology and investigative journalism 
                to uncover truth and promote justice in the digital age.
              </Typography>
            </Box>
            <Box 
              sx={{ 
                mt: 3,
                background: 'linear-gradient(45deg, rgba(0, 242, 255, 0.1), rgba(121, 40, 202, 0.1))',
                borderRadius: 2,
                p: 2,
              }}
            >
              <Typography variant="subtitle2" color="primary.main">
                Innovative • Fearless • Transparent
              </Typography>
            </Box>
          </NeonBox>
        </Grid>

        {/* Impact Section */}
        <Grid item xs={12} md={6} component={motion.div} variants={itemVariants}>
          <NeonBox
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography 
                variant="h4" 
                gutterBottom
                sx={{
                  color: 'secondary.main',
                  textShadow: '0 0 10px rgba(160, 100, 255, 0.5)',
                  mb: 3,
                  fontFamily: theme.typography.h1.fontFamily,
                }}
              >
                Our Impact
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: theme.typography.body1.fontFamily,
                }}
              >
                Through our network of media companies and partnerships, we've
                exposed countless injustices and driven meaningful change across
                California and beyond, reaching millions of people annually.
              </Typography>
            </Box>
            <Box 
              sx={{ 
                mt: 3,
                background: 'linear-gradient(45deg, rgba(160, 100, 255, 0.1), rgba(0, 242, 255, 0.1))',
                borderRadius: 2,
                p: 2,
              }}
            >
              <Typography variant="subtitle2" color="secondary.main">
                Global Reach • Local Impact • Lasting Change
              </Typography>
            </Box>
          </NeonBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
