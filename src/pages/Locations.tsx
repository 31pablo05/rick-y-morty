// src/pages/Locations.tsx
import React, { useState, useEffect } from 'react';
import { fetchLocations } from '../api/rickAndMortyApi';
import LocationCard from '../components/LocationCard';

const Locations: React.FC = () => {
  const [locations, setLocations] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadLocations = async () => {
      const data = await fetchLocations(page);
      setLocations(prev => [...prev, ...data.results]);
    };
    loadLocations();
  }, [page]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div onScroll={handleScroll}>
      {locations.map(location => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
};

export default Locations;
