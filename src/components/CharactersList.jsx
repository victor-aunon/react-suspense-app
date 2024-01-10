/* eslint-disable react/prop-types */

export function CharactersList({ characters }) {
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
