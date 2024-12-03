// src/pages/WhoWeAre.js

import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import GavelIcon from '@mui/icons-material/Gavel';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SchoolIcon from '@mui/icons-material/School';
import TimelineIcon from '@mui/icons-material/Timeline';

const teamMembers = [
  {
    category: "Experienced Attorneys",
    icon: <GavelIcon />,
    description: "With over 20 years of experience, our lawyers specialize in minority rights, ensuring accountability and justice.",
    stats: {
      casesWon: 850,
      successRate: 92,
      impactScore: 95
    },
    expertise: [
      "Civil Rights Litigation",
      "Corporate Accountability",
      "Environmental Justice",
      "Digital Privacy Rights"
    ],
    color: "#00f2ff"
  },
  {
    category: "Dedicated Reporters",
    icon: <NewspaperIcon />,
    description: "Passionate storytellers committed to exposing the hidden truths that impact underprivileged communities.",
    stats: {
      storiesPublished: 1200,
      readershipMillions: 45,
      investigationsCompleted: 320
    },
    expertise: [
      "Investigative Journalism",
      "Data-Driven Reporting",
      "Community Engagement",
      "Digital Storytelling"
    ],
    color: "#7928ca"
  },
  {
    category: "California Community College Alumni",
    icon: <SchoolIcon />,
    description: "Every founder, employee, and investor shares roots in the California Community College ecosystem.",
    stats: {
      alumniNetwork: 5000,
      communityProjects: 250,
      mentorshipHours: 1500
    },
    expertise: [
      "Local Knowledge",
      "Community Leadership",
      "Educational Advocacy",
      "Social Innovation"
    ],
    color: "#ff0080"
  }
];

// Styled Components
const TeamCard = styled(motion.div)(({ theme, color }) => ({
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
  },
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

const StatBox = styled(Box)(({ theme, color }) => ({
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

const WhoWeAre = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [stats, setStats] = useState({});

  // Simulate real-time stat updates
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * teamMembers.length);
      const statKeys = Object.keys(teamMembers[randomIndex].stats);
      const randomStat = statKeys[Math.floor(Math.random() * statKeys.length)];
      
      setStats(prev => ({
        ...prev,
        [randomIndex]: {
          ...prev[randomIndex],
          [randomStat]: Math.floor(Math.random() * 10) + 
            (teamMembers[randomIndex].stats[randomStat])
        }
      }));
    }, 3000);

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
            fontFamily: 'Orbitron, sans-serif',
            background: 'linear-gradient(45deg, #00f2ff, #7928ca)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
          }}
        >
          Who We Are
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={member.category}>
              <TeamCard
                color={member.color}
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrapper color={member.color}>
                  {member.icon}
                </IconWrapper>

                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 2,
                    fontFamily: 'Orbitron, sans-serif',
                    color: member.color,
                    fontSize: { xs: '1.5rem', md: '2rem' }
                  }}
                >
                  {member.category}
                </Typography>

                <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.8)' }}>
                  {member.description}
                </Typography>

                <AnimatePresence>
                  {selectedMember === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Typography variant="h6" sx={{ mb: 2, color: member.color }}>
                        Core Expertise
                      </Typography>
                      <Grid container spacing={2}>
                        {member.expertise.map((skill, idx) => (
                          <Grid item xs={6} key={skill}>
                            <motion.div
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <Box sx={{
                                p: 1,
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
                                <TimelineIcon sx={{ color: member.color, fontSize: 20 }} />
                                <Typography variant="body2">{skill}</Typography>
                              </Box>
                            </motion.div>
                          </Grid>
                        ))}
                      </Grid>

                      <Box sx={{ mt: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2, color: member.color }}>
                          Impact Metrics
                        </Typography>
                        <Grid container spacing={2}>
                          {Object.entries(member.stats).map(([key, value]) => (
                            <Grid item xs={4} key={key}>
                              <StatBox color={member.color}>
                                <Typography variant="h4" sx={{ color: member.color }}>
                                  {stats[index]?.[key] || value}
                                  {typeof value === 'number' && key.includes('Rate') ? '%' : ''}
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </Typography>
                              </StatBox>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TeamCard>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default WhoWeAre;
