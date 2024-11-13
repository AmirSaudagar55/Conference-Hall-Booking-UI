import React from 'react';
import SearchBar from './SearchBar';
import ConferenceList from './ConferenceList';
import FilterPanel from './FilterPanel';

function FeaturesPage() {
  return (
    <div className="container mx-auto p-8">
      <SearchBar />
      <div className="flex flex-col md:flex-row mt-4">
        <ConferenceList />
        <FilterPanel />
      </div>
    </div>
  );
}

export default FeaturesPage;
