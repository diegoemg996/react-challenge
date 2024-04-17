import { useState, useEffect } from 'react';
import axios from 'axios';
import { Character, CharactersResponse } from '../interfaces/characters.interface';


const useCharacters = (page: number = 1) => {

  const API_URL = `https://rickandmortyapi.com/api/character/?`;

  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CharactersResponse>(`${API_URL}page=${page}`);
        setCharacters(response.data.results);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { characters, loading, error };
};

export default useCharacters;
