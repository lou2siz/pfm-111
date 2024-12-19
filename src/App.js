// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Components
import NavBar from './components/NavBar';
import AnimatedBackground from './components/AnimatedBackground';

// Pages
import AboutUs from './pages/AboutUs';
import OurInitiatives from './pages/OurInitiatives';
import OurPartnerships from './pages/OurPartnerships';
import OurMediaCompanies from './pages/OurMediaCompanies';
import WhoWeAre from './pages/WhoWeAre';
import WhyWeDoWhatWeDo from './pages/WhyWeDoWhatWeDo';

// Styles and Theme
import theme from './themes/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app-container">
          <AnimatedBackground />
          <NavBar />
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/initiatives" element={<OurInitiatives />} />
            <Route path="/partnerships" element={<OurPartnerships />} />
            <Route path="/media-companies" element={<OurMediaCompanies />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/why-we-do-what-we-do" element={<WhyWeDoWhatWeDo />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
