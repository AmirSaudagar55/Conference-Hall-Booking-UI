import React from 'react';
import { useParams } from 'react-router-dom';

function ConferenceDetail() {
  const { conferenceId } = useParams();

  // Mock data for demonstration; replace with actual data fetching logic
  const conferenceData = {
    id: conferenceId,
    name: 'BookingBuddy Chambers',
    location: 'Worli, Mumbai',
    hours: 'Mon to Fri: 9AM to 8PM, Sat: 10AM to 4PM',
    price: 3000,
    rating: 4.2,
    capacity: 50, // Added capacity
    description: 'Striking the perfect balance between cosmopolitan excitement and an authentic community...',
    amenities: ['Quiet space', 'Video facilities', 'Chai Point', 'Coffee Bar', 'Outdoor space', 'Wellness room', 'Parking'],
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 bg-gray-100">
          <h1 className="text-3xl font-bold text-gray-900">{conferenceData.name}</h1>
          <p className="text-gray-700 mt-2">{conferenceData.location} - {conferenceData.hours}</p>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Conference Image */}
          <div className="w-full lg:w-1/2">
            <img src="https://via.placeholder.com/500x300" alt={`${conferenceData.name}`} className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Conference Details */}
          <div className="w-full lg:w-1/2 p-6">
            <p className="text-gray-700 mb-4">{conferenceData.description}</p>
            <p className="text-xl font-semibold text-gray-900 mb-2">Price: <span className="font-bold">₹{conferenceData.price} / Hr</span></p>
            <p className="text-lg font-semibold text-gray-900">Rating: {conferenceData.rating} ⭐</p>
            <p className="text-lg font-semibold text-gray-900">Capacity: {conferenceData.capacity} people</p> {/* Displaying capacity */}

            <h2 className="text-xl font-semibold mt-6 text-gray-900">Amenities</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {conferenceData.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>

            <button className="mt-6 w-full lg:w-auto bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className="p-6 bg-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Location Map</h2>
          <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Map location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConferenceDetail;
