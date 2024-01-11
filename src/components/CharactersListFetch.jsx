import fetchData from "../fetchData";
const API_URL = "https://rickandmortyapi.com/api/charater";
const resource = fetchData(API_URL);

export function CharactersList() {
  const characters = resource.read();
  return (
    <ul>
      {[...characters].map(character => (
        <li key={character?.id}>
          <p>Name: {character?.name}</p>
          <p>Specie: {character?.species}</p>
          <p>Origin: {character?.origin?.name}</p>
          <img src={character?.image} alt={character?.name} />
        </li>
      ))}
    </ul>
  );
}
