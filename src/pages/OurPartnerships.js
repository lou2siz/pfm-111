// src/pages/OurPartnerships.js

import React from 'react';
import { Container, Typography, Grid, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CampaignIcon from '@mui/icons-material/Campaign';
import DiversityIcon from '@mui/icons-material/Diversity3';
import TimelineIcon from '@mui/icons-material/Timeline';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const partnerships = [
  {
    id: 1,
    name: "California Community Colleges",
    icon: <SchoolIcon />,
    description: "Supporting student-driven innovation and providing opportunities for the next generation of change-makers.",
    color: "#00f2ff"
  },
  {
    id: 2,
    name: "MiraCosta Community College",
    icon: <AccountBalanceIcon />,
    description: "Our birthplace and a vital partner in empowering students to stand up for justice.",
    color: "#00a2ff"
  },
  {
    id: 3,
    name: "Truthout.org",
    icon: <CampaignIcon />,
    description: "A leading voice in independent journalism, helping us amplify critical stories.",
    color: "#ff0080"
  },
  {
    id: 4,
    name: "Equality California",
    icon: <DiversityIcon />,
    description: "Advocating for LGBTQ+ rights and ensuring equality for all communities.",
    color: "#00ff00"
  }
];

// Styled Components
const PartnershipCard = styled(motion.div)(({ theme, color }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  background: 'rgba(17, 17, 17, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  height: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    padding: '2px',
    background: `linear-gradient(45deg, ${color}, transparent)`,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
  '& .card-content': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(1),
  },
  '& .header-section': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(0, 2),
  },
  '& .description-section': {
    flex: 1,
    marginBottom: theme.spacing(4),
    padding: theme.spacing(0, 2),
  },
  '& .details-section': {
    marginTop: 'auto',
  }
}));

const IconBox = styled(Box)(({ color }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(45deg, ${color}33, transparent)`,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: -2,
    borderRadius: 'inherit',
    background: `linear-gradient(45deg, ${color}, transparent)`,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
  '& svg': {
    fontSize: 30,
    color: color,
  }
}));

const OurPartnerships = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            mb: 6,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            background: 'linear-gradient(45deg, #00f2ff, #00a2ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
            fontFamily: theme.typography.h1.fontFamily,
          }}
        >
          Our Partnerships
        </Typography>

        <Grid container spacing={4}>
          {partnerships.map((partner) => (
            <Grid item xs={12} md={6} key={partner.id}>
              <PartnershipCard
                color={partner.color}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="card-content">
                  <div className="header-section">
                    <IconBox color={partner.color}>
                      {partner.icon}
                    </IconBox>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        ml: { xs: 1, sm: 2 },
                        fontFamily: theme.typography.h1.fontFamily,
                        color: partner.color,
                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' }
                      }}
                    >
                      {partner.name}
                    </Typography>
                  </div>

                  <div className="description-section">
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.6
                      }}
                    >
                      {partner.description}
                    </Typography>
                  </div>
                </div>
              </PartnershipCard>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default OurPartnerships;
