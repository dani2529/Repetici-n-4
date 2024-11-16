import React, { useEffect, useState } from "react";
import "./app.css";
import CharacterCard from "./components/CaracterCard/CaracterCard";
import './app.css';

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  const rickAndMortyCharacterId = 1;
  

  useEffect(() => {
    const url =
      "https://rickandmortyapi.com/api/character/" + rickAndMortyCharacterId;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data <------");
        console.log(data.name, "nombre personaje");
        setName(data.name);
        setImage(data.image);
        setGenre(data.species);
        setStatus(data.status);
      });
  }, []);

  return (
    <div>
      {/* <h1>Rick and morty</h1> */}
      <CharacterCard
        nombre={name}
        imagen={image}
        genero={genre}
        status={status} 
      />
    </div>
  );
}

export default App;
