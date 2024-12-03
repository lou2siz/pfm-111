import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const achievements = [
  {
    id: 1,
    role: "CEO & Visionary",
    icon: <BusinessCenterIcon />,
    description: "Leading the charge in transforming California's media landscape through innovative technology and fearless journalism.",
    stats: {
      companiesLed: 3,
      teamSize: 50,
      successRate: 95
    },
    highlights: [
      "Founded multiple successful ventures",
      "Pioneering AI in journalism",
      "Award-winning leadership",
      "Community-focused initiatives"
    ],
    color: "#00f2ff"
  },
  {
    id: 2,
    role: "Elite Realtor",
    icon: <HomeWorkIcon />,
    description: "Revolutionizing real estate through data-driven insights and personalized client experiences.",
    stats: {
      propertiesSold: 200,
      clientSatisfaction: 98,
      marketValue: "150M+"
    },
    highlights: [
      "Luxury property specialist",
      "Data-driven market analysis",
      "Virtual reality showings",
      "Blockchain transactions"
    ],
    color: "#7928ca"
  },
  {
    id: 3,
    role: "Strategic Trader",
    icon: <ShowChartIcon />,
    description: "Leveraging advanced analytics and market insights to achieve consistent trading success.",
    stats: {
      successfulTrades: 1500,
      portfolioGrowth: 180,
      accuracy: 92
    },
    highlights: [
      "AI-powered trading strategies",
      "Risk management expert",
      "Market trend analysis",
      "Quantum computing insights"
    ],
    color: "#ff0080"
  }
];

// Styled Components
const ProfileCard = styled(motion.div)(({ theme, color }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  background: 'rgba(17, 17, 17, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  height: '100%',
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
    background: `linear-gradient(45deg, ${color}, transparent)`,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  }
}));

const IconWrapper = styled(Box)(({ color }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(45deg, ${color}33, transparent)`,
  marginBottom: 16,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: -2,
    borderRadius: 'inherit',
    padding: 2,
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

const StatBox = styled(motion.div)(({ theme, color }) => ({
  padding: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-5px)',
    boxShadow: `0 5px 15px ${color}33`,
  }
}));

const SocialLink = styled('a')(({ theme, color }) => ({
  color: color,
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateX(10px)',
  }
}));

const BenBriskin = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [stats, setStats] = useState({});

  // Simulate real-time stat updates
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * achievements.length);
      const statKeys = Object.keys(achievements[randomIndex].stats);
      const randomStat = statKeys[Math.floor(Math.random() * statKeys.length)];
      
      setStats(prev => ({
        ...prev,
        [randomIndex]: {
          ...prev[randomIndex],
          [randomStat]: Math.floor(Math.random() * 10) + 
            (achievements[randomIndex].stats[randomStat])
        }
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: { xs: 4, md: 8 }, mb: { xs: 4, md: 8 } }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
          mb: { xs: 3, md: 6 }
        }}
      >
        Ben Briskin
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }}>
        {achievements.map((achievement) => (
          <Grid item xs={12} md={4} key={achievement.id}>
            <Box sx={{ 
              p: { xs: 2, sm: 3, md: 4 },
              mb: { xs: 2, md: 0 }
            }}>
              <ProfileCard
                color={achievement.color}
                onClick={() => setSelectedRole(selectedRole === achievement.id ? null : achievement.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper color={achievement.color}>
                  {achievement.icon}
                </IconWrapper>

                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 2,
                    fontFamily: 'Orbitron, sans-serif',
                    color: achievement.color
                  }}
                >
                  {achievement.role}
                </Typography>

                <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}>
                  {achievement.description}
                </Typography>

                <Grid container spacing={{ xs: 1, md: 2 }}>
                  {Object.entries(achievement.stats).map(([key, value]) => (
                    <Grid item xs={12} sm={4} key={key}>
                      <StatBox color={achievement.color}>
                        <Typography variant="h4" sx={{ color: achievement.color }}>
                          {stats[achievement.id]?.[key] || value}
                          {typeof value === 'number' && 
                            (key.includes('Rate') || 
                             key.includes('Satisfaction') || 
                             key.includes('Accuracy') || 
                             key.includes('Growth')) ? '%' : ''}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </Typography>
                      </StatBox>
                    </Grid>
                  ))}
                </Grid>

                <AnimatePresence>
                  {selectedRole === achievement.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" sx={{ mb: 2, color: achievement.color }}>
                          Key Highlights
                        </Typography>
                        <Grid container spacing={2}>
                          {achievement.highlights.map((highlight, idx) => (
                            <Grid item xs={6} key={highlight}>
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
                                  <EmojiEventsIcon sx={{ color: achievement.color }} />
                                  <Typography variant="body2">{highlight}</Typography>
                                </Box>
                              </motion.div>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ProfileCard>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BenBriskin; 