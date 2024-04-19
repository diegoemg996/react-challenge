import { useNavigate } from "react-router-dom";
import { Character } from "../interfaces/characters.interface";

interface Props {
  character: Character;
}

export const CharacterItem = ({ character }: Props) => {
  const { id, name, image } = character;

  const navigate = useNavigate();

  return (
    <div key={id} className="characters__card">
      <img src={image} alt={name} />

      <div className="characters__card-content p-3">
        <h3 className="characters__card-title">{name}</h3>
        <button
          className="btn btn-primary p-3"
          onClick={() => navigate(`/user/characters/${id}`)}
        >
          See more
        </button>
      </div>
    </div>
  );
};
