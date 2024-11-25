import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const paginacion = () => {
    const [characters, setcharacters] = useState([]);
    const [infopage, setInfopague] = useState([]);

    const Getlist =(page,url) => {
        let url =
        page === null
        ? url
        : 'https://rickandmortyapi.com/api/character(page)';

      fetch(url)
        .then((respose) => respose.json())
        .then((data) => {
          setcharacters(data.results);
          setInfopague(data.info);
         ));
        
    };
    

    useEffect(() => {
        Getlist(0, null);
    }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Especie</th>
          <th>Genero</th>
        </tr>
      </thead>
      <tbody>
        {characters?.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <imag src={item.image} alt="foto" />
              </td>
              <td>{item.nombre}</td>
              <td>{item.species}</td>
              <td>{item.gender}</td>
            </tr>
          );
        })}
         <button onClick={handleClick}>Salir</button>
      </tbody>
    </Table>
  );
};

export default paginacion;
