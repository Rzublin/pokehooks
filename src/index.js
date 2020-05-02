import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [wildPokemon, setWildPokemon] = useState({});

  useEffect(() => {
    encounterWildPokemon();
    // eslint-disable-next-line
  }, []);

  const pokeId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const encounterWildPokemon = () => {
    const API_URL = "https://pokeapi.co/api/v2/pokemon/" + pokeId();
    axios.get(API_URL).then((response) => {
      setWildPokemon(response.data);
    });
  };

  return (
    <div className="app-wrapper">
      <header>
        <h1 className="title">Pokehooks</h1>

        <section className="wild-pokemon">{wildPokemon.name}</section>
      </header>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
