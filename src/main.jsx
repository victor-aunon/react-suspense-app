/* eslint-disable react/no-deprecated */
import ReactDOM from "react-dom";
import App from "./App.jsx";
import AppSuspense from "./App-suspense.jsx";

const app =
  import.meta.env.VITE_USE_SUSPENSE &&
  JSON.parse(import.meta.env.VITE_USE_SUSPENSE) ? (
    <AppSuspense />
  ) : (
    <App />
  );

ReactDOM.render(app, document.getElementById("root"));
