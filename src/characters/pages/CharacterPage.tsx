import { useState } from "react";
import { CharacterItem } from "../components/CharacterItem";
import usecharacters from "../hooks/useCharacters";

export const CharacterPage = () => {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const { characters, loading, error } = usecharacters(searchTerm);
  

  return (
    <div className="container">
      <h1 className="m-t-3">Characters</h1>

      <input 
        type="text" 
        className="text-field p-2 m-b-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search character"
      />
      {loading && <p>Loading...</p>}
      {
        error ? <p>{error}</p> : (
          <div className="characters__grid">
            {characters.map((character) => (
              <CharacterItem character={character} key={character.id} />
            ))}
          </div>
        )
      }
    </div>
  )
}
