import { useEffect, useState } from "react";
import { CharactersList } from "./components/CharactersList";
import { Loading } from "./components/Loading";
import "./App.css";

const API_URL = "https://rickandmortyapi.com/api/character";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(data => data.json())
      .then(data => setData(data?.results));
  }, []);

  return (
    <>
      {data ? (
        <>
          <h1>Fetch-On-Render</h1>
          <CharactersList characters={data} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
