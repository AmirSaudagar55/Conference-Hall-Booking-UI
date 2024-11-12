import React from 'react';

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8">
      <div className="space-y-4 md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-800">
          Enhance your meetings with unlimited video conferencing advantages!
        </h1>
        <p className="text-gray-600">
          Whether you're hosting seminars, closing deals, or connecting with loved ones, our platform ensures crystal-clear communication, advanced features, and unparalleled ease of use.
        </p>
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-700">
          Create Meeting
        </button>
        <button className="px-6 py-2 text-black border border-black rounded hover:bg-gray-200">
          Enter Code
        </button>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img src="meeting-room-sample.jpg" alt="Meeting Room" className="w-full max-w-md rounded-lg shadow-lg" />
      </div>
    </section>
  );
}

export default Hero;
