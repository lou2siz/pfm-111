// src/pages/OurPartnerships.js

import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

const OurPartnerships = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Logo at the top of the page */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box component="img" src="/logo1.png" alt="Logo" sx={{ height: 80 }} />
      </Box>
      <Typography variant="h4" gutterBottom>
        Our Partnerships
      </Typography>
      <Typography variant="body1" paragraph>
        Collaboration is key to our mission. Passionfruit Media proudly partners with organizations
        that share our vision for justice and equity:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="California Community Colleges"
            secondary="Supporting student-driven innovation and providing opportunities for the next generation of change-makers."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="MiraCosta Community College"
            secondary="Our birthplace and a vital partner in empowering students to stand up for justice."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Truthout.org"
            secondary="A leading voice in independent journalism, helping us amplify critical stories."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Equality California"
            secondary="Advocating for LGBTQ+ rights and ensuring equality for all communities."
          />
        </ListItem>
      </List>
      <Typography variant="body1" paragraph>
        Together, these partnerships help us drive meaningful change, uplift underrepresented voices,
        and hold powerful entities accountable.
      </Typography>
    </Container>
  );
};

export default OurPartnerships;
