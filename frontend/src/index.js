import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/light.scss";
import "./assets/styles/dark.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
