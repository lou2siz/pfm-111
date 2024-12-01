// src/pages/OurMediaCompanies.js

import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Box, Grid } from '@mui/material';

const OurMediaCompanies = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {/* Logo at the top of the page */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box component="img" src="/logo1.png" alt="Logo" sx={{ height: 80 }} />
      </Box>
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
      <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
        Our Media Outlets
      </Typography>
      {/* Displaying the media outlets */}
      <Grid container spacing={4}>
        {/* San Diego Sun Report */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src="/logox1.jpg"
              alt="San Diego Sun Report"
              sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
            />
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              San Diego Sun Report
            </Typography>
            <Typography variant="body2">
              Illuminating the stories of San Diego's diverse communities.
            </Typography>
          </Box>
        </Grid>
        {/* San Francisco Freedom Times */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src="/logox2.jpg"
              alt="San Francisco Freedom Times"
              sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
            />
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              San Francisco Freedom Times
            </Typography>
            <Typography variant="body2">
              Championing liberty and justice in the Bay Area.
            </Typography>
          </Box>
        </Grid>
        {/* Los Angeles Passion News */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src="/logox3.jpg"
              alt="Los Angeles Passion News"
              sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
            />
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              Los Angeles Passion News
            </Typography>
            <Typography variant="body2">
              Fueling the heart of LA with stories that matter.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body1" paragraph sx={{ marginTop: 4 }}>
        Through these efforts, we showcase our unwavering commitment to making the world a better,
        more equitable place for all.
      </Typography>
    </Container>
  );
};

export default OurMediaCompanies;
