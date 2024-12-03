// src/pages/OurPartnerships.js

import React, { useState, useEffect } from 'react';
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
    metrics: {
      studentsImpacted: 250000,
      programsLaunched: 75,
      successRate: 94
    },
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
    metrics: {
      projectsCompleted: 120,
      studentEngagement: 85,
      communityImpact: 92
    },
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
    color: "#7928ca"
  },
  {
    id: 3,
    name: "Truthout.org",
    icon: <CampaignIcon />,
    description: "A leading voice in independent journalism, helping us amplify critical stories.",
    metrics: {
      storiesPublished: 3500,
      readership: 12000000,
      investigationSuccess: 96
    },
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
    metrics: {
      policiesChanged: 45,
      livesImpacted: 500000,
      advocacyWins: 88
    },
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

const MetricBox = styled(motion.div)(({ theme, color, isActive }) => ({
  padding: theme.spacing(2),
  background: isActive ? `rgba(${color}, 0.15)` : 'rgba(255, 255, 255, 0.05)',
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  position: 'relative',
  '&:hover': {
    background: `rgba(${color}, 0.2)`,
    transform: 'translateY(-5px)',
    boxShadow: `0 5px 15px ${color}33`,
  }
}));

const MetricTooltip = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: -40,
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'rgba(0, 0, 0, 0.9)',
  padding: '8px 12px',
  borderRadius: '4px',
  fontSize: '0.75rem',
  color: 'white',
  whiteSpace: 'nowrap',
  zIndex: 10,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -5,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid rgba(0, 0, 0, 0.9)',
  }
}));

const OurPartnerships = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [metrics, setMetrics] = useState({});
  const [activeMetric, setActiveMetric] = useState(null);

  // Simulate real-time metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      const randomPartner = partnerships[Math.floor(Math.random() * partnerships.length)];
      const metricKeys = Object.keys(randomPartner.metrics);
      const randomMetric = metricKeys[Math.floor(Math.random() * metricKeys.length)];
      
      setMetrics(prev => ({
        ...prev,
        [randomPartner.id]: {
          ...prev[randomPartner.id],
          [randomMetric]: Math.floor(Math.random() * 10) + randomPartner.metrics[randomMetric]
        }
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getMetricDescription = (key, value) => {
    const descriptions = {
      studentsImpacted: 'Total number of students benefiting from our programs',
      programsLaunched: 'New initiatives successfully implemented',
      successRate: 'Percentage of successful program outcomes',
      projectsCompleted: 'Total projects delivered successfully',
      studentEngagement: 'Student participation rate in our programs',
      communityImpact: 'Community satisfaction score',
      storiesPublished: 'Total investigative stories published',
      readership: 'Monthly active readers',
      investigationSuccess: 'Successful investigation completion rate',
      policiesChanged: 'Number of policies influenced',
      livesImpacted: 'People directly impacted by our work',
      advocacyWins: 'Successful advocacy campaign rate'
    };
    return descriptions[key] || 'Impact metric';
  };

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
            background: 'linear-gradient(45deg, #00f2ff, #7928ca)',
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
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <IconBox color={partner.color}>
                    {partner.icon}
                  </IconBox>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      ml: 2,
                      fontFamily: 'Orbitron, sans-serif',
                      color: partner.color,
                      fontSize: { xs: '1.5rem', md: '2rem' }
                    }}
                  >
                    {partner.name}
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.8)' }}>
                  {partner.description}
                </Typography>

                <Grid container spacing={2}>
                  {Object.entries(partner.metrics).map(([key, value]) => (
                    <Grid item xs={4} key={key}>
                      <MetricBox
                        color={partner.color}
                        isActive={activeMetric === `${partner.id}-${key}`}
                        onMouseEnter={() => setActiveMetric(`${partner.id}-${key}`)}
                        onMouseLeave={() => setActiveMetric(null)}
                        whileHover={{ scale: 1.05 }}
                      >
                        <AnimatePresence>
                          {activeMetric === `${partner.id}-${key}` && (
                            <MetricTooltip
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              {getMetricDescription(key, value)}
                            </MetricTooltip>
                          )}
                        </AnimatePresence>
                        
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            color: partner.color,
                            transition: 'all 0.3s ease-in-out',
                            transform: activeMetric === `${partner.id}-${key}` ? 'scale(1.1)' : 'scale(1)',
                          }}
                        >
                          {metrics[partner.id]?.[key] || value}
                          {typeof value === 'number' && 
                            (key.includes('Rate') || 
                             key.includes('Success') || 
                             key.includes('Impact') || 
                             key.includes('Engagement')) ? '%' : ''}
                        </Typography>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            color: 'rgba(255, 255, 255, 0.7)',
                            display: 'block',
                            marginTop: 1
                          }}
                        >
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </Typography>
                      </MetricBox>
                    </Grid>
                  ))}
                </Grid>

                <AnimatePresence>
                  {selectedPartner === partner.id && (
                    <motion.div
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
                            <Grid item xs={6} key={initiative}>
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
              </PartnershipCard>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default OurPartnerships;
