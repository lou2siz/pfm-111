// src/pages/OurInitiatives.js

import React, { useState } from 'react';
import { Container, Typography, Grid, Box, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BalanceIcon from '@mui/icons-material/Balance';
import ShareIcon from '@mui/icons-material/Share';
import SmartToyIcon from '@mui/icons-material/SmartToy';

// Styled Components
const InitiativeCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  background: 'rgba(17, 17, 17, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'inherit',
    padding: '2px',
    background: 'linear-gradient(45deg, #00f2ff, #00a2ff)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
}));

const GlowingIcon = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0, 242, 255, 0.1)',
  boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 0 30px rgba(0, 242, 255, 0.5)',
  },
}));

const initiatives = [
  {
    id: 1,
    title: "Investigative Excellence",
    icon: <LightbulbIcon sx={{ fontSize: 30, color: '#00f2ff' }} />,
    description: "We uncover the missing pieces of critical information and expose systemic injustices that oppress everyday people.",
    details: [
      "Data mining techniques",
      "AI-powered pattern recognition",
      "Secure whistleblower platforms",
      "Global investigation network"
    ],
    stats: {
      casesResolved: 150,
      impactScore: 92,
      reachMillions: 45
    }
  },
  {
    id: 2,
    title: "Accountability Through Litigation",
    icon: <BalanceIcon sx={{ fontSize: 30, color: '#00a2ff' }} />,
    description: "Our legal team fights tirelessly to obtain public and private records, ensuring the truth is revealed.",
    details: [
      "Evidence tracking",
      "High Level Legal Team",
      "Quantum-secure documentation",
      "AI-assisted legal research"
    ],
    stats: {
      successRate: 89,
      recordsObtained: 50000,
      precedentsSet: 12
    }
  },
  {
    id: 3,
    title: "Distribution of Truth",
    icon: <ShareIcon sx={{ fontSize: 30, color: '#00f2ff' }} />,
    description: "By collaborating with trusted news outlets and educational institutions, we ensure critical stories reach the masses.",
    details: [
      "Decentralized content distribution",
      "Neural network fact-checking",
      "Real-time impact tracking",
      "Cross-platform syndication"
    ],
    stats: {
      reach: "7500+",
      engagement: "15%+",
      truthScore: 100
    }
  },
  {
    id: 4,
    title: "AI Auditing for Justice",
    icon: <SmartToyIcon sx={{ fontSize: 30, color: '#00a2ff' }} />,
    description: "As technology evolves, we advocate for responsible AI implementation, ensuring fairness and equity.",
    details: [
      "Computing integration",
      "Ethical AI frameworks",
      "Bias detection systems",
      "Automated fairness testing"
    ],
    stats: {
      systemsAudited: 12,
      biasesIdentified: 37,
      improvementRate: 83
    }
  }
];

const OurInitiatives = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 4, md: 8 }, mb: { xs: 4, md: 8 } }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
          mb: { xs: 3, md: 6 }
        }}
      >
        Our Initiatives
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }}>
        {initiatives.map((initiative) => (
          <Grid item xs={12} md={6} key={initiative.id}>
            <Box sx={{ 
              p: { xs: 2, sm: 3, md: 4 },
              mb: { xs: 2, md: 0 }
            }}>
              <InitiativeCard
                onClick={() => setExpandedId(expandedId === initiative.id ? null : initiative.id)}
                onMouseEnter={() => setHoveredId(initiative.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GlowingIcon>
                  {initiative.icon}
                </GlowingIcon>

                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 2,
                    fontFamily: 'Orbitron, sans-serif',
                    color: hoveredId === initiative.id ? '#00f2ff' : 'white'
                  }}
                >
                  {initiative.title}
                </Typography>

                <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.8)' }}>
                  {initiative.description}
                </Typography>

                <AnimatePresence>
                  {expandedId === initiative.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: 'hidden' }}
                    >
                      <Box sx={{ mt: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2, color: '#00f2ff' }}>
                          Advanced Capabilities:
                        </Typography>
                        <Grid container spacing={2}>
                          {initiative.details.map((detail, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                              <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <Box 
                                  sx={{ 
                                    p: 2, 
                                    background: 'rgba(0, 242, 255, 0.1)',
                                    borderRadius: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    '&:hover': {
                                      background: 'rgba(0, 242, 255, 0.2)',
                                      transform: 'translateX(10px)',
                                      transition: 'all 0.3s ease-in-out'
                                    }
                                  }}
                                >
                                  <ArrowForwardIcon sx={{ mr: 1, color: '#00f2ff' }} />
                                  <Typography variant="body2">
                                    {detail}
                                  </Typography>
                                </Box>
                              </motion.div>
                            </Grid>
                          ))}
                        </Grid>

                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Box sx={{ 
                            mt: 3, 
                            p: 2, 
                            background: 'rgba(0, 162, 255, 0.1)', 
                            borderRadius: 2,
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'linear-gradient(45deg, rgba(0, 242, 255, 0.1), rgba(0, 162, 255, 0.1))',
                              opacity: 0,
                              transition: 'opacity 0.3s ease-in-out',
                            },
                            '&:hover::before': {
                              opacity: 1,
                            }
                          }}>
                            <Typography variant="h6" sx={{ mb: 2, color: '#00a2ff' }}>
                              Impact Metrics
                            </Typography>
                            <Grid container spacing={2}>
                              {Object.entries(initiative.stats).map(([key, value], index) => (
                                <Grid item xs={4} key={key}>
                                  <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                  >
                                    <Typography variant="h4" sx={{ 
                                      color: '#00f2ff',
                                      textShadow: '0 0 10px rgba(0, 242, 255, 0.3)'
                                    }}>
                                      {value}
                                      {typeof value === 'number' && 
                                        (key.includes('Rate') || 
                                         key.includes('Growth') || 
                                         key.includes('Engagement') || 
                                         key.includes('Score')) ? '%' : ''}
                                    </Typography>
                                    <Typography variant="caption" sx={{ 
                                      color: 'rgba(255, 255, 255, 0.7)',
                                      display: 'block',
                                      marginTop: 1
                                    }}>
                                      {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </Typography>
                                  </motion.div>
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        </motion.div>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>

                <IconButton 
                  sx={{ 
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    transform: expandedId === initiative.id ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </InitiativeCard>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurInitiatives;
