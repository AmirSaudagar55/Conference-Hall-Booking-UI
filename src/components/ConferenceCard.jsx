import React from 'react';
import { Link } from 'react-router-dom';

function ConferenceCard({ name, location, availableFrom, capacity, rating, image, conferenceId }) {
  return (
    <Link to={`/features/${conferenceId}`} className="w-full max-w-sm bg-gray-100 border border-black rounded-lg shadow-md">
      <img className="p-8 rounded-t-lg" src={image} alt={`${name} image`} />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-black">{name}</h5>
        <p className="text-gray-600">Location: {location}</p>
        <p className="text-gray-600">Available From: {availableFrom}</p>
        <p className="text-gray-600">Capacity: {capacity} people</p>
        
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-300' : 'text-gray-300'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            ))}
          </div>
          <span className="bg-gray-300 text-black text-xs font-semibold px-2.5 py-0.5 rounded ml-3">
            {rating.toFixed(1)}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <button className="bg-black text-white rounded-full px-4 py-2 transition duration-300 hover:bg-gray-800">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ConferenceCard;
