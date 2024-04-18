import { Character } from "../interfaces/characters.interface";

interface Props {
  character: Character;
}

export const CharacterItem = ({ character }: Props) => {
  const { id, name, image, status, species } = character;

  return (
    <div key={id} className="characters__card">
      <img src={image} alt={name} />

      <div className="characters__card-content p-3">
        <h3 className="characters__card-title">{name}</h3>
        <p className="characters__card-text">Status: {status}</p>
        <p className="characters__card-text">Species: {species}</p>
      </div>
    </div>
  );
};
