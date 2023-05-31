import React, { useState } from 'react'
import FormStyle from './Form.module.css'

const Form = ({handleSubmit, setNombre, setApellido, setEmail, setFecha, setEstilo, setTatuaje}) => {

  return (
    <div className={FormStyle.body}>
        <h2 className={FormStyle.h2}>Agenda un turno para tatuarte</h2>
        <form onSubmit={handleSubmit} action="" className={FormStyle.form}>
            <label>Nombre</label>
            <input type="text" onChange={(event) => setNombre(event.target.value)}/>
            {/* ------------------------------------------------------------------------ */}
            <label>Apellido</label>
            <input type="text" onChange={(event) => setApellido(event.target.value)}/>
            {/* ------------------------------------------------------------------------ */}
            <label>Email</label>
            <input type="email" onChange={(event) => setEmail(event.target.value)}/>
            {/* ------------------------------------------------------------------------ */}
            <label>Fecha de nacimiento</label>
            <input type="date" onChange={(event) => setFecha(event.target.value)}/>
            {/* ------------------------------------------------------------------------ */}
            <label >Que estilo de tatuaje te gustaria hacer?</label>
            <select onChange={(event) => setEstilo(event.target.value)}>
                <option value="Tradicional">Tradicional</option>
                <option value="Neotradicional">Neotradicional</option>
                <option value="Black and grey">Black and grey</option>
                <option value="Realismo">Realismo</option>
                <option value="Oriental">Oriental</option>
                <option value="New school">New school</option>
                <option value="Lettering">Lettering</option>
            </select>
            {/* ------------------------------------------------------------------------ */}
            <label>Tienes tatuajes?</label>
            <select onChange={(event) => setTatuaje(event.target.value)}>
                <option>Si</option>
                <option>No</option>
            </select>

            <button className={FormStyle.button}>Enviar</button>

        </form>
    </div>
  )
}

export default Form