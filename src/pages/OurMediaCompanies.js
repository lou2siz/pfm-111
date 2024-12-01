// src/pages/OurMediaCompanies.js

import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const OurMediaCompanies = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Media Companies
      </Typography>
      <Typography variant="body1" paragraph>
        Passionfruit Media operates a suite of specialized media outlets, each focused on ensuring
        their respective regions have access to unbiased, critical reporting. Each company is equipped
        with a dedicated team, legal support, and partnerships to bring justice to light.
      </Typography>
      <Typography variant="body1" paragraph>
        Our media companies work collaboratively to:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Amplify community voices." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Advocate for transparency in public and private institutions." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bring regional issues to national and global attention." />
        </ListItem>
      </List>
      <Typography variant="body1" paragraph>
        By maintaining a strong local presence while leveraging national resources, we ensure every
        region gets the representation and accountability it deserves.
      </Typography>
      <Typography variant="body1" paragraph>
        Through these efforts, we hope to showcase our unwavering commitment to making the world a
        better, more equitable place for all.
      </Typography>
    </Container>
  );
};

export default OurMediaCompanies;
