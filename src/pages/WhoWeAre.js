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
      casesWon: 4,
      successRate: 57,
      impactScore: 75
    },
    expertise: [
      "Civil Rights Litigation",
      "Corporate Accountability",
      "Environmental Justice",
      "Public Records Accountability"
    ],
    color: "#00f2ff"
  },
  {
    category: "Dedicated Reporters",
    icon: <NewspaperIcon />,
    description: "Passionate storytellers committed to exposing the hidden truths that impact underprivileged communities.",
    stats: {
      storiesPublished: 70,
      readershipMillions: 0,
      investigationsCompleted: 46
    },
    expertise: [
      "Investigative Journalism",
      "Data-Driven Reporting",
      "Community Engagement",
      "Digital Storytelling"
    ],
    color: "#00f2ff"
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
            background: 'linear-gradient(45deg, #00f2ff, #00f2ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
          }}
        >
          Who We Are
        </Typography>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {teamMembers.map((member) => (
            <Grid item xs={12} md={4} key={member.category}>
              <Box sx={{ 
                p: { xs: 2, sm: 3, md: 4 },
                mb: { xs: 2, md: 0 }
              }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    mb: { xs: 1, md: 2 }
                  }}
                >
                  {member.category}
                </Typography>
                
                <Grid container spacing={{ xs: 1, md: 2 }}>
                  {Object.entries(member.stats).map(([key, value]) => (
                    <Grid item xs={4} key={key}>
                      <Box sx={{ p: { xs: 1, md: 2 } }}>
                        <Typography variant="h4" sx={{ color: member.color }}>
                          {stats[index]?.[key] || value}
                          {typeof value === 'number' && key.includes('Rate') ? '%' : ''}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default WhoWeAre;
