// src/pages/OurPartnerships.js

import React, { useState } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
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
    initiatives: [
      "AI-Powered Learning Labs",
      "Student Innovation Hub",
      "Digital Justice Program",
      "Tech Equity Initiative"
    ],
    achievements: [
      "Launched 25 Tech Incubators",
      "Created 150 Scholarships",
      "Established 10 Research Centers"
    ],
    color: "#00f2ff"
  },
  {
    id: 2,
    name: "MiraCosta Community College",
    icon: <AccountBalanceIcon />,
    description: "Our birthplace and a vital partner in empowering students to stand up for justice.",
    initiatives: [
      "Virtual Reality Campus",
      "Blockchain Certificates",
      "Neural Learning Network",
      "Quantum Computing Lab"
    ],
    achievements: [
      "Pioneer in EdTech Innovation",
      "Award-winning Programs",
      "Global Recognition"
    ],
    color: "#00a2ff"
  },
  {
    id: 3,
    name: "Truthout.org",
    icon: <CampaignIcon />,
    description: "A leading voice in independent journalism, helping us amplify critical stories.",
    initiatives: [
      "AI Truth Detection",
      "Decentralized Publishing",
      "Neural Fact-Checking",
      "Quantum-Secure Data"
    ],
    achievements: [
      "Global Impact Awards",
      "Industry Leadership",
      "Innovation Excellence"
    ],
    color: "#ff0080"
  },
  {
    id: 4,
    name: "Equality California",
    icon: <DiversityIcon />,
    description: "Advocating for LGBTQ+ rights and ensuring equality for all communities.",
    initiatives: [
      "Digital Rights Platform",
      "AI Bias Detection",
      "Smart Policy Framework",
      "Community Data Hub"
    ],
    achievements: [
      "Policy Innovation Awards",
      "Community Excellence",
      "Digital Advocacy Pioneer"
    ],
    color: "#00ff00"
  }
];

// Styled Components
const PartnershipCard = styled(motion.div)(({ theme, color }) => ({
  position: 'relative',
  padding: { xs: theme.spacing(2), sm: theme.spacing(3), md: theme.spacing(4) },
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
  },
  '& .header-section': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  '& .description-section': {
    flex: 1,
    marginBottom: theme.spacing(4),
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
  const [selectedPartner, setSelectedPartner] = useState(null);

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
            fontFamily: 'Orbitron, sans-serif',
          }}
        >
          Our Partnerships
        </Typography>

        <Grid container spacing={4}>
          {partnerships.map((partner) => (
            <Grid item xs={12} md={6} key={partner.id}>
              <PartnershipCard
                color={partner.color}
                onClick={() => setSelectedPartner(selectedPartner === partner.id ? null : partner.id)}
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
                        fontFamily: 'Orbitron, sans-serif',
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

                  <AnimatePresence>
                    {selectedPartner === partner.id && (
                      <motion.div
                        className="details-section"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Box sx={{ mt: 4 }}>
                          <Typography variant="h6" sx={{ mb: 2, color: partner.color }}>
                            Future Initiatives
                          </Typography>
                          <Grid container spacing={2}>
                            {partner.initiatives.map((initiative, idx) => (
                              <Grid item xs={12} sm={6} key={initiative}>
                                <motion.div
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <Box sx={{
                                    p: 2,
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    borderRadius: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    '&:hover': {
                                      background: 'rgba(255, 255, 255, 0.1)',
                                      transform: 'translateX(10px)',
                                    }
                                  }}>
                                    <RocketLaunchIcon sx={{ color: partner.color }} />
                                    <Typography variant="body2">{initiative}</Typography>
                                  </Box>
                                </motion.div>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>

                        <Box sx={{ mt: 3 }}>
                          <Typography variant="h6" sx={{ mb: 2, color: partner.color }}>
                            Key Achievements
                          </Typography>
                          {partner.achievements.map((achievement, idx) => (
                            <motion.div
                              key={achievement}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.3 + (idx * 0.1) }}
                            >
                              <Box sx={{
                                p: 2,
                                mb: 2,
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: 1,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                              }}>
                                <TimelineIcon sx={{ color: partner.color }} />
                                <Typography variant="body2">{achievement}</Typography>
                              </Box>
                            </motion.div>
                          ))}
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
