import { Suspense } from "react";
import { CharactersList } from "./components/CharactersListFetch";
import { ErrorBoundary } from "react-error-boundary";
import { Loading } from "./components/Loading";
import { RenderError } from "./components/RenderError";
import "./App.css";

function AppSuspense() {
  return (
    <ErrorBoundary fallbackRender={RenderError}>
      <Suspense fallback={<Loading />}>
        <h1>Render as you fetch</h1>
        <CharactersList />
      </Suspense>
    </ErrorBoundary>
  );
}

export default AppSuspense;
