import { useEffect, useState } from "react";
import { CharactersList } from "./components/CharactersList";
import { Loading } from "./components/Loading";
import { RenderError } from "./components/RenderError";
import "./App.css";

const API_URL = "https://rickandmortyapi.com/api/character";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(data => data.json())
      .then(data => {
        if (data.error) setError({ message: data.error });
        setData(data.results);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) return <RenderError error={error} />;

  if (isLoading) return <Loading />;

  return (
    <>
      {data && (
        <>
          <h1>Fetch-On-Render</h1>
          <CharactersList characters={data} />
        </>
      )}
    </>
  );
}

export default App;
