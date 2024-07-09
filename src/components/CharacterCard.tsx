// src/components/CharacterCard.tsx
import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import './CharacterCard.css';

interface CharacterCardProps {
  character: {
    id: number;
    name: string;
    image: string;
  };
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { addFavorite } = useFavorites();
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <button onClick={() => addFavorite({ id: character.id, type: 'character', name: character.name })}>
        Add to Favorites
      </button>
    </div>
  );
};

export default CharacterCard;
