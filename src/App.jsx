import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturePage from './components/FeaturePage';
import Features from './components/Features';
import ConferenceDetail from './components/ConferenceDetail';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<FeaturePage />} />
          <Route path="/features/:conferenceId" element={<ConferenceDetail/>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
