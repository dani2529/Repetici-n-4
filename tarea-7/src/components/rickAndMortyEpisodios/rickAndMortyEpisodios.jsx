import React, { useEffect, useState } from 'react'
import EpisodiosCard from '../EpisodiosCard/episodiosCard';

const RickAndMortyEpisodios = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const url = "https://rickandmortyapi.com/api/episode";
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
            console.log(item,'item episoes');
          return (
            <EpisodiosCard
              key={item.id}
              nombre={item.name}
              url={item.url}
              episodio={item.episode}
              created={item.created}
            />
          );
        })}
      </div>
    </div>
    )
}

export default RickAndMortyEpisodios