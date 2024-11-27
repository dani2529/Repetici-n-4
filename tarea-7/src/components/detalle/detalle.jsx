import React from 'react'

const Detalle = (props) => {
  return (
    <div>
          <p>{props.genre}</p>
          <p>{props.status}</p>
          <p>{props.url}</p>
          <p>{props.episodio}</p>
          <p>{props.created}</p>
    </div>
  )
}

export default Detalle