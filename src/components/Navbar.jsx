import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="text-lg font-bold">Echomeet</div>
      
      <div className="bg-gray-100 px-4 py-2 rounded-full flex space-x-4">
        <Link
          to="/features"
          className="text-gray-600 px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300"
        >
          Features
        </Link>
        <a
          href="#resources"
          className="text-gray-600 px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300"
        >
          Resources
        </a>
        <a
          href="#pricing"
          className="text-gray-600 px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300"
        >
          Plan & Pricing
        </a>
        <a
          href="#about"
          className="text-gray-600 px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300"
        >
          About us
        </a>
      </div>
      
      <div className="flex space-x-4">
        <button className="bg-black text-white rounded-full px-4 py-2 transition duration-300">
          Login
        </button>
        <button className="border border-black text-black rounded-full px-4 py-2 transition duration-300 hover:bg-gray-200">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
