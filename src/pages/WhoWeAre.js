// src/pages/WhoWeAre.js

import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const WhoWeAre = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Who We Are
      </Typography>
      <Typography variant="body1" paragraph>
        Passionfruit Media is a family of changemakers united by a common goal: to promote justice and
        truth. Our team includes:
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Experienced Attorneys"
            secondary="With over 20 years of experience, our lawyers specialize in minority rights, ensuring accountability and justice."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Dedicated Reporters"
            secondary="Passionate storytellers committed to exposing the hidden truths that impact underprivileged communities."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="California Community College Alumni"
            secondary="Every founder, employee, and investor shares roots in the California Community College ecosystem, bringing local knowledge and shared values to our work."
          />
        </ListItem>
      </List>
      <Typography variant="body1" paragraph>
        We are deeply committed to fostering self-love and equity in all we do.
      </Typography>
    </Container>
  );
};

export default WhoWeAre;
