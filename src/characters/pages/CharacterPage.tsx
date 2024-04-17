import { useState } from "react";
import { CharacterItem } from "../components/CharacterItem";
import usecharacters from "../hooks/useCharacters";

export const CharacterPage = () => {

  const { characters, loading, error } = usecharacters(1);
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="container">
      <h1 className="m-t-3">Characters</h1>

      <input 
        type="text" 
        className="text-field p-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button 
        className="btn btn-primary p-2"
      >Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="characters__grid">
        {characters.map((character) => (
          <CharacterItem character={character} />
        ))}
      </div>
      

    </div>
  )
}
