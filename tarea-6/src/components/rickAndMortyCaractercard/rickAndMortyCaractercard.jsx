import React, { useEffect, useState } from "react";
import CaracterCard from "../CaracterCard/CaracterCard";

const RickAndMortyCaractercard = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  const handleClick = () => {
    props.setUser([]);
  };
  return (
    <div>
      <h2>Nombre usario:{props.user}</h2>
      <div className="container-card">
        {data.map((item) => {
          return (
            <CaracterCard
              key={item.id}
              nombre={item.name}
              imagen={item.image}
              genero={item.genre}
              status={item.status}
            />
          );
        })}
      </div>
      <button onClick={handleClick}>Salir</button>
    </div>
  );
};

export default RickAndMortyCaractercard;
