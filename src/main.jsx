// Importa createRoot da react-dom/client
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Assicurati di importare anche il CSS

// Usa createRoot invece di ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
