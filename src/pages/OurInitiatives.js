// src/pages/OurInitiatives.js

import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

const OurInitiatives = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Logo at the top of the page */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box component="img" src="/logo1.png" alt="Logo" sx={{ height: 80 }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Our Initiatives
      </Typography>
      <Typography variant="body1" paragraph>
        At <strong>Passionfruit Media</strong>, our initiatives are centered around justice, equality,
        and empowerment. Here’s how we work to create a better world:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="1. Investigative Excellence"
            secondary="We uncover the missing pieces of critical information and expose systemic injustices that oppress everyday people. Through our investigative reporting, we shine a light on stories that deserve national attention."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2. Accountability Through Litigation"
            secondary="Our legal team fights tirelessly to obtain public and private records, ensuring the truth is revealed. We litigate to hold both government entities and corporations accountable."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="3. Distribution of Truth"
            secondary="By collaborating with trusted news outlets and educational institutions, we ensure that critical stories reach the masses. We amplify the voices of those who are unheard and work to dismantle systemic oppression."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="4. AI Auditing for Justice"
            secondary="As technology evolves, we advocate for the responsible implementation of artificial intelligence, using auditing tools to ensure fairness and equity in AI systems."
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default OurInitiatives;
