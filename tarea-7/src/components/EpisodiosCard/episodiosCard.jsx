import React from 'react'
import Titulo from '../titulo/titulo'
import Detalle from '../detalle/detalle'

const EpisodiosCard = (props) => {
  return (
    <div className="image-container">
    <div className="center">
      <Titulo title={props.nombre} />
    </div>

    <div className="genero">
      <Detalle  url={props.url} episodio={props.episodio} created={props.created} />
    </div>
  </div>
  )
}

export default EpisodiosCard