import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="text-lg font-bold">Echomeet</div>
      <div className="flex space-x-4">
        <a href="#features" className="text-gray-600 hover:text-black">Features</a>
        <a href="#resources" className="text-gray-600 hover:text-black">Resources</a>
        <a href="#pricing" className="text-gray-600 hover:text-black">Plan & Pricing</a>
        <a href="#about" className="text-gray-600 hover:text-black">About us</a>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-600 hover:text-black">Login</button>
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
