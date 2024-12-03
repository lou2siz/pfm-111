// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import OurInitiatives from './pages/OurInitiatives';
import OurPartnerships from './pages/OurPartnerships';
import WhyWeDoWhatWeDo from './pages/WhyWeDoWhatWeDo';
import WhoWeAre from './pages/WhoWeAre';
import OurMediaCompanies from './pages/OurMediaCompanies';
import BenBriskin from './pages/BenBriskin';

// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  // Basic authentication check - replace with your actual auth logic
  const isAuthenticated = true; // For now, always allow access
  
  // Redirect to home if not authenticated
  return isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/initiatives" element={<OurInitiatives />} />
        <Route path="/partnerships" element={<OurPartnerships />} />
        <Route path="/why-we-do-what-we-do" element={<WhyWeDoWhatWeDo />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/media-companies" element={<OurMediaCompanies />} />
        <Route 
          path="/ben-briskin" 
          element={
            <ProtectedRoute>
              <BenBriskin />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
