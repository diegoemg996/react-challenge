import { useState, useEffect } from 'react';
import axios from 'axios';
import { Character, CharactersResponse } from '../interfaces/characters.interface';

const useCharacters = (searchTerm: string = "") => {

  const baseUrl = `https://rickandmortyapi.com/api/character/?`;

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
      const fetchData = async () => {
        try{
          setLoading(true);
            let url = `${baseUrl}name=${searchTerm}`;
            const response = await axios.get<CharactersResponse>(url);
            setCharacters(response.data.results);
            setLoading(false);
            setError(null);
          } catch (error) {
            setError('Error fetching data');
            setLoading(false);
          }
      };

      fetchData();
  }, [searchTerm]);


  return { loading, error, characters };
};

export default useCharacters;