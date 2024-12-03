// src/pages/OurMediaCompanies.js

import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';

const mediaCompanies = [
  {
    id: 1,
    name: "San Diego Sun Report",
    tagline: "Illuminating the stories of San Diego's diverse communities",
    logo: "/logox1.jpg",
    stats: {
      readership: "2.5M+",
      stories: 1200,
      impact: 92
    },
    features: [
      "AI-Powered Investigation Tools",
      "Real-time Community Engagement",
      "Blockchain-verified Sources",
      "Neural Network Analysis"
    ],
    recentStories: [
      "Tech Innovation in San Diego's Startup Scene",
      "Community Impact Report 2024",
      "Environmental Justice Initiative"
    ],
    color: "#00f2ff"
  },
  {
    id: 2,
    name: "San Francisco Freedom Times",
    tagline: "Championing liberty and justice in the Bay Area",
    logo: "/logox2.jpg",
    stats: {
      readership: "3.1M+",
      stories: 1500,
      impact: 95
    },
    features: [
      "Quantum-secured Data Protection",
      "Decentralized Publishing Platform",
      "AR/VR News Experience",
      "Smart Contract Transparency"
    ],
    recentStories: [
      "Tech Ethics Investigation Series",
      "Bay Area Innovation Report",
      "Social Justice Technology Impact"
    ],
    color: "#7928ca"
  },
  {
    id: 3,
    name: "Los Angeles Passion News",
    tagline: "Fueling the heart of LA with stories that matter",
    logo: "/logox3.jpg",
    stats: {
      readership: "4.2M+",
      stories: 1800,
      impact: 94
    },
    features: [
      "Neural Language Processing",
      "Holographic News Displays",
      "Crowd-sourced Verification",
      "Quantum Computing Analysis"
    ],
    recentStories: [
      "LA's Digital Transformation",
      "Future of Entertainment Report",
      "Urban Technology Initiative"
    ],
    color: "#ff0080"
  }
];

// Styled Components
const MediaCard = styled(motion.div)(({ theme, color }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  background: 'rgba(17, 17, 17, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  minHeight: 400,
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
    background: `linear-gradient(45deg, ${color}, ${theme.palette.background.default})`,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
}));

const StatsBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-5px)',
  },
}));

const InfoIconWrapper = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  color: 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  zIndex: 2,
  '&:hover': {
    color: '#00f2ff',
  }
}));

const OurMediaCompanies = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [stats, setStats] = useState({});
  const [hoveredInfo, setHoveredInfo] = useState(null);

  // Simulate real-time stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        [Math.floor(Math.random() * mediaCompanies.length)]: {
          readership: (Math.random() * 0.1 + 1).toFixed(2) + 'M+',
          stories: Math.floor(Math.random() * 100) + 1000,
          impact: Math.floor(Math.random() * 5) + 90
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
          Our Media Companies
        </Typography>

        <Grid container spacing={4}>
          {mediaCompanies.map((company) => (
            <Grid item xs={12} md={4} key={company.id}>
              <MediaCard
                color={company.color}
                onClick={() => setSelectedCompany(selectedCompany === company.id ? null : company.id)}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <InfoIconWrapper
                  onMouseEnter={() => setHoveredInfo(company.id)}
                  onMouseLeave={() => setHoveredInfo(null)}
                  whileHover={{ rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <InfoIcon />
                </InfoIconWrapper>

                <AnimatePresence>
                  {hoveredInfo === company.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      style={{
                        position: 'absolute',
                        top: 50,
                        right: 16,
                        background: 'rgba(0, 0, 0, 0.9)',
                        padding: '12px',
                        borderRadius: '8px',
                        maxWidth: '200px',
                        zIndex: 3,
                        border: '1px solid rgba(0, 242, 255, 0.3)',
                      }}
                    >
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Click to view advanced features and technology stack
                      </Typography>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  initial={false}
                  animate={{ rotateY: selectedCompany === company.id ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Box sx={{ 
                    position: 'relative',
                    backfaceVisibility: 'hidden'
                  }}>
                    <Box
                      component="img"
                      src={company.logo}
                      alt={company.name}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                        borderRadius: 2,
                        mb: 2
                      }}
                    />

                    <Typography 
                      variant="h4" 
                      sx={{ 
                        mb: 2,
                        fontFamily: 'Orbitron, sans-serif',
                        color: company.color
                      }}
                    >
                      {company.name}
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {company.tagline}
                    </Typography>

                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <StatsBox>
                          <AnalyticsIcon sx={{ color: company.color }} />
                          <Box>
                            <Typography variant="h6" sx={{ color: company.color }}>
                              {stats[company.id]?.readership || company.stats.readership}
                            </Typography>
                            <Typography variant="caption">Readers</Typography>
                          </Box>
                        </StatsBox>
                      </Grid>
                      <Grid item xs={4}>
                        <StatsBox>
                          <ArticleIcon sx={{ color: company.color }} />
                          <Box>
                            <Typography variant="h6" sx={{ color: company.color }}>
                              {stats[company.id]?.stories || company.stats.stories}
                            </Typography>
                            <Typography variant="caption">Stories</Typography>
                          </Box>
                        </StatsBox>
                      </Grid>
                      <Grid item xs={4}>
                        <StatsBox>
                          <GroupIcon sx={{ color: company.color }} />
                          <Box>
                            <Typography variant="h6" sx={{ color: company.color }}>
                              {stats[company.id]?.impact || company.stats.impact}%
                            </Typography>
                            <Typography variant="caption">Impact</Typography>
                          </Box>
                        </StatsBox>
                      </Grid>
                    </Grid>
                  </Box>

                  <AnimatePresence>
                    {selectedCompany === company.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                          padding: '20px',
                          background: 'rgba(17, 17, 17, 0.95)',
                        }}
                      >
                        <motion.div
                          initial={{ x: -20 }}
                          animate={{ x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Typography variant="h5" sx={{ color: company.color, mb: 3 }}>
                            Advanced Features
                          </Typography>
                        </motion.div>

                        {company.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Box 
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 2,
                                p: 1,
                                borderRadius: 1,
                                background: 'rgba(255, 255, 255, 0.05)',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                  background: 'rgba(255, 255, 255, 0.1)',
                                  transform: 'translateX(10px)',
                                }
                              }}
                            >
                              <LaunchIcon sx={{ mr: 1, color: company.color }} />
                              <Typography variant="body2">{feature}</Typography>
                            </Box>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </MediaCard>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default OurMediaCompanies;
