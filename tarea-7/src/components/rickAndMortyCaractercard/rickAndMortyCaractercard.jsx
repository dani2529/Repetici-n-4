import React, { useEffect, useState } from 'react'
import CaracterCard from '../CaracterCard/CaracterCard';
import './rickAndMortyCaractercard.css'

const RickAndMortyCaractercard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);
  return (
    <div className="container-global">
      
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
  </div>
  )
}

export default RickAndMortyCaractercard