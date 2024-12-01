// src/pages/WhyWeDoWhatWeDo.js

import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const WhyWeDoWhatWeDo = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Logo at the top of the page */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box component="img" src="/logo1.png" alt="Logo" sx={{ height: 80 }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Why We Do What We Do
      </Typography>
      <Typography variant="body1" paragraph>
        In a world where injustice often goes unnoticed, Passionfruit Media is here to bridge the gap.
        We believe:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Integrity Matters"
            secondary="People deserve access to the truth and the tools to fight for their rights."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Equity is Non-Negotiable"
            secondary="Everyone, regardless of gender, identity, race, or socioeconomic status, deserves equal pay, opportunities, and respect."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Hate Has No Place"
            secondary="We foster an inclusive, safe environment and do not tolerate even minor acts of hate or discrimination."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary="Empowerment is Key"
            secondary="Through education, litigation, and media, we provide communities with the power to stand against systemic oppression."
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default WhyWeDoWhatWeDo;
