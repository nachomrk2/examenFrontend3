import React from 'react'
import CardStyle from './Card.module.css'

const Card = ({nombre, email}) => {
  return (
    <div className={CardStyle.tarjeta}>
        <h2>Respuesta recibida! Muchas gracias {nombre}</h2>
        <h3>En breve nuestro equipo se pondra en contacto contigo por email ({email}) para agendar un turno</h3>
    </div>
  )
}

export default Card