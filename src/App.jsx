import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CustomRequest from './components/CustomRequest';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <div className="p-8 flex flex-col md:flex-row justify-between">
        <CustomRequest />
        {/* Additional content or feature sections can go here */}
      </div>
    </div>
  );
}

export default App;
