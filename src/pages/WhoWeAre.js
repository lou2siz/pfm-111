// src/pages/WhoWeAre.js


import { Container, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import GavelIcon from '@mui/icons-material/Gavel';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SchoolIcon from '@mui/icons-material/School';

const teamMembers = [
  {
    category: "Experienced Attorneys",
    icon: <GavelIcon />,
    description: "With over 20 years of experience, our lawyers specialize in minority rights, ensuring accountability and justice.",
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
const TeamCard = styled(motion.div)(({ theme, 
  color }) => ({
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




const WhoWeAre = () => {

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
                
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {member.description}
                </Typography>

                <Grid container spacing={2}>
                  {member.expertise.map((skill) => (
                    <Grid item xs={12} key={skill}>
                      <Box sx={{ 
                        p: 2, 
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: 1,
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.1)',
                          transform: 'translateX(10px)',
                        }
                      }}>
                        <Typography variant="body2">{skill}</Typography>
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
