// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../api/rickAndMortyApi';
import CharacterCard from '../components/CharacterCard';
import './Home.css';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await fetchCharacters(page);
      setCharacters(prev => [...prev, ...data.results]);
    };
    loadCharacters();
  }, [page]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className="home" onScroll={handleScroll}>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Home;
