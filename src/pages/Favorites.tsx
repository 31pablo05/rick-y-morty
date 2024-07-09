// src/pages/Favorites.tsx
import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const Favorites: React.FC = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map(fav => (
          <li key={fav.id}>
            {fav.name} ({fav.type})
            <button onClick={() => removeFavorite(fav.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
