// src/pages/WhyWeDoWhatWeDo.js

import React, { useState } from 'react';
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

const WhyWeDoWhatWeDo = () => {
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);
  const [hoveredInitiative, setHoveredInitiative] = useState(null);

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
              
              <Typography variant="body1" sx={{ mb: 3 }}>
                {principle.description}
              </Typography>

              <Grid container spacing={2}>
                {principle.initiatives.map((initiative) => (
                  <Grid item xs={12} sm={6} key={initiative}>
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
                      <RocketLaunchIcon sx={{ color: principle.color }} />
                      <Typography variant="body2">{initiative}</Typography>
                    </Box>
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
