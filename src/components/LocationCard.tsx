// src/components/LocationCard.tsx
import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

interface LocationCardProps {
  location: {
    id: number;
    name: string;
  };
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const { addFavorite } = useFavorites();
  return (
    <div className="location-card">
      <h3>{location.name}</h3>
      <button onClick={() => addFavorite({ id: location.id, type: 'location', name: location.name })}>
        Add to Favorites
      </button>
    </div>
  );
};

export default LocationCard;
