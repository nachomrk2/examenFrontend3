import React, { useState } from 'react'

const Form = () => {

    const [nombre, setNombre]= useState('')
    
    const [show, setShow]= useState(false)
    const [error, setError]= useState(false)

    const handleSubmit= (event) => {
        event.preventDefault()
        if (nombre.length >3 && direccion>6) {
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <label>Nombre:</label>
            <input type="text" onChange={(event) => setNombre(event.target.value)}/>

            <button>Enviar</button>

        </form>
    </div>
  )
}

export default Form