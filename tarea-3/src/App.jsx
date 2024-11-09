import React from "react";
import "./app.css";
import Image from "./components/Image/Imagen";
import Title from "./components/Titulo/Titulo";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="image-container">
      <div className="imag">
        <Image url="./Rick.jpeg" />
      </div>
      <div className="container-img"></div>
      <div className="centered-box"></div>
      <div className="center">
        <Title title="Rick Morty" />
      </div>

      <div className="genero">
        <Details genre="Masculino" status="Vivo" />
      </div>
    </div>
  );
}

export default App;

