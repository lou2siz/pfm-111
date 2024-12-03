// src/pages/WhyWeDoWhatWeDo.js

import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import SecurityIcon from '@mui/icons-material/Security';
import BalanceIcon from '@mui/icons-material/Balance';
import BlockIcon from '@mui/icons-material/Block';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const principles = [
  {
    id: 1,
    title: "Integrity Matters",
    icon: <SecurityIcon />,
    description: "People deserve access to the truth and the tools to fight for their rights.",
    impact: {
      truthRevealedCount: 1250,
      communitiesEmpowered: 85,
      transparencyScore: 98
    },
    initiatives: [
      "Blockchain-Verified Reporting",
      "AI Truth Detection Systems",
      "Quantum-Secure Data Protection",
      "Neural Network Analysis"
    ],
    color: "#00f2ff"
  },
  {
    id: 2,
    title: "Equity is Non-Negotiable",
    icon: <BalanceIcon />,
    description: "Everyone deserves equal pay, opportunities, and respect, regardless of their background.",
    impact: {
      equalityInitiatives: 750,
      discriminationCases: 320,
      successRate: 94
    },
    initiatives: [
      "AI Bias Detection",
      "Smart Contract Equality",
      "Digital Rights Platform",
      "Automated Fairness Audit"
    ],
    color: "#00f2ff"
  },
  {
    id: 3,
    title: "Hate Has No Place",
    icon: <BlockIcon />,
    description: "We foster an inclusive environment and combat discrimination in all forms.",
    impact: {
      incidentsAddressed: 890,
      communitiesProtected: 125,
      preventionRate: 96
    },
    initiatives: [
      "Neural Hate Speech Detection",
      "Community Shield Protocol",
      "Digital Safe Spaces",
      "Real-time Intervention System"
    ],
    color: "#ff0080"
  },
  {
    id: 4,
    title: "Empowerment is Key",
    icon: <EmojiPeopleIcon />,
    description: "Through education, litigation, and media, we provide tools for systemic change.",
    impact: {
      peopleEmpowered: 25000,
      toolsDeployed: 450,
      communityGrowth: 92
    },
    initiatives: [
      "Equality For All",
      "AI Auditing",
      "Fighting For The Forgotten",
      "Smart Resource Distribution"
    ],
    color: "#00ff00"
  }
];

const PrincipleCard = styled(motion.div)(({ theme, color }) => ({
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

const ImpactBox = styled(motion.div)(({ theme, color }) => ({
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

const WhyWeDoWhatWeDo = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);
  const [impacts, setImpacts] = useState({});
  const [hoveredInitiative, setHoveredInitiative] = useState(null);

  // Simulate real-time impact updates
  useEffect(() => {
    const interval = setInterval(() => {
      const randomPrinciple = principles[Math.floor(Math.random() * principles.length)];
      const impactKeys = Object.keys(randomPrinciple.impact);
      const randomImpact = impactKeys[Math.floor(Math.random() * impactKeys.length)];
      
      setImpacts(prev => ({
        ...prev,
        [randomPrinciple.id]: {
          ...prev[randomPrinciple.id],
          [randomImpact]: Math.floor(Math.random() * 10) + randomPrinciple.impact[randomImpact]
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
        Why We Do What We Do
      </Typography>

      <Grid container spacing={{ xs: 2, md: 4 }}>
        {principles.map((principle) => (
          <Grid item xs={12} md={6} key={principle.id}>
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
                {principle.title}
              </Typography>
              
              <Grid container spacing={{ xs: 1, md: 2 }}>
                {Object.entries(principle.impact).map(([key, value]) => (
                  <Grid item xs={12} sm={4} key={key}>
                    <ImpactBox color={principle.color}>
                      <Typography variant="h4" sx={{ color: principle.color }}>
                        {impacts[principle.id]?.[key] || value}
                        {typeof value === 'number' && 
                          (key.includes('Rate') || 
                           key.includes('Score') || 
                           key.includes('Growth') || 
                           key.includes('Success')) ? '%' : ''}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Typography>
                    </ImpactBox>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyWeDoWhatWeDo;
