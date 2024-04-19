import { useEffect, useState } from "react";
import { Character } from "../interfaces/characters.interface";
import axios from "axios";

export const useGetInfo = (id: string) => {

    const baseUrl = `https://rickandmortyapi.com/api/character/`;
    
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [character, setCharacter] = useState<Character | null>(null);
    
    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get<Character>(`${baseUrl}${id}`);
            setCharacter(response.data);
            setLoading(false);
            setError(null);
        } catch (error) {
            setError('Error fetching data');
            setLoading(false);
        }
    }

    
    return { loading, error, character };
};