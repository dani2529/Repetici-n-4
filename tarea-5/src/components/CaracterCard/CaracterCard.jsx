import React from 'react'
import Image from '../image/Image'
import Titulo from '../titulo/titulo'
import Detalle from '../detalle/detalle'
import './CaracterCard.css'

const CaracterCard = (props) => {
  return (
    <div className="image-container">
      <div className="imag">    
        <Image url={props.imagen} />
      </div>
      <div className="container-img"></div>
      <div className="centered-box"></div>
      <div className="center">
        <Titulo title={props.nombre} />
      </div>

      <div className="genero">
        <Detalle genre={props.genero} status={props.status} />
      </div>
    </div>
  )
}

export default CaracterCard