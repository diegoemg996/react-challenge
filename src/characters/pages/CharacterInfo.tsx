import { useParams, useNavigate } from "react-router-dom";
import { useGetInfo } from "../hooks/useGetInfo";

export const CharacterInfo = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const { loading, error, character } = useGetInfo(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {character && (
        <div>
          <h1 className="m-t-3">{character.name}</h1>

          <div className="character__info p-3">
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
          </div>

          <button
            className="btn btn-primary p-3 m-t-3"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </div>
      )}
    </div>
  );
};
