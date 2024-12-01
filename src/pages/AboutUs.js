// src/pages/AboutUs.js

import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        At <strong>Passionfruit Media</strong>, we believe in uncovering the truth and promoting justice. Founded as a startup at MiraCosta Community College, our mission is to hold governments, corporations, and institutions accountable for their actions. We focus on the collection, distribution, and litigation of hidden injustices and systematic oppression to empower individuals and communities.
      </Typography>
      <Typography variant="body1" paragraph>
        Driven by integrity and transparency, Passionfruit Media operates a suite of media companies, each with dedicated headquarters to ensure comprehensive coverage of regional and national issues. Our team comprises seasoned attorneys with over 20 years of experience advocating for minority and underprivileged rights, as well as passionate reporters and dedicated staff—all of whom share a common vision for a more equitable world.
      </Typography>
      <Typography variant="body1" paragraph>
        As part of the California Community College ecosystem, we are proud to have partnerships with Truthout.org, Equality California, and California Community Colleges, among others. Together, we strive to ensure that everyone has the freedom and opportunity to experience self-love and dignity in a world that can often feel cold and unjust.
      </Typography>
    </Container>
  );
};

export default AboutUs;
