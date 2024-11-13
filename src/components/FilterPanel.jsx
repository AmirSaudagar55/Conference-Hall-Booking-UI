import React from 'react';

function FilterPanel() {
  return (
    <div className="w-full md:w-1/4 p-4 border-l border-gray-300">
      <h2 className="text-lg font-semibold mb-4">Filter By Date and Time</h2>
      <div className="mb-4">
        <label className="block mb-2">Calendar</label>
        <input type="date" className="border border-gray-300 p-2 w-full rounded" />
      </div>
      <div>
        <button className="w-full py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          Select Time
        </button>
      </div>
    </div>
  );
}

export default FilterPanel;