import React from 'react'

const Image = (props) => {
  return (
    <div>
      <img src={props.url} alt="Foto de el artista/personaje" />
    </div>
  )
}

export default Image