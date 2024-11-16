import React from 'react'
import './detalle';

const Detalle = (props) => {
  return (
    <div>
    <p>{props.genre}</p>
    <p>{props.status}</p>
  </div>
  )
}

export default Detalle