// src/api/rickAndMortyApi.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const fetchCharacters = async (page: number) => {
  const response = await api.get(`/character/?page=${page}`);
  return response.data;
};

export const fetchLocations = async (page: number) => {
  const response = await api.get(`/location/?page=${page}`);
  return response.data;
};
