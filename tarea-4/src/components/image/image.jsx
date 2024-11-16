import React from 'react'
import './image.css';

const Image = (props) => {
  return (
    <img src={props.url} alt="Foto de el artista/personaje" />
  )
}

export default Image