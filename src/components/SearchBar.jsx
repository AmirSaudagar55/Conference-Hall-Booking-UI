import React from 'react';

function SearchBar() {
  return (
    <div className="ml-40 flex items-center border border-gray-300 rounded-full p-2 w-full md:w-1/2 mb-4 bg-white">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow px-2 bg-white focus:outline-none"
      />
      <button className="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/>
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
