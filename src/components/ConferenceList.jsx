import React from 'react';
import ConferenceCard from './ConferenceCard';

function ConferenceList() {
  const conferenceHalls = [
    { conferenceId: 1, name: 'Conference Room A', location: 'Building 1', availableFrom: '9:00 AM', capacity: '100', rating: 4 },
    { conferenceId: 2, name: 'Conference Room B', location: 'Building 2', availableFrom: '10:00 AM', capacity: '50', rating: 3 },
    { conferenceId: 3, name: 'Conference Room B', location: 'Building 2', availableFrom: '10:00 AM', capacity: '50', rating: 3 },
    { conferenceId: 4, name: 'Conference Room B', location: 'Building 2', availableFrom: '10:00 AM', capacity: '50', rating: 3 },
    // Add more rooms if needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-3/4">
      {conferenceHalls.map((hall, index) => (
        <ConferenceCard key={index} {...hall} />
      ))}
    </div>
  );
}

export default ConferenceList;
