import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Pages/Form'

function App() {


  const [nombre, setNombre]= useState('')
  const [apellido, setApellido]= useState('')
  const [email, setEmail]= useState('')
  const [fecha, setFecha]= useState(null)
  const [estilo, setEstilo]= useState('')
  const [tatuaje, setTatuaje]= useState('')


  const [show, setShow]= useState(false)
  const [error, setError]= useState(false)

  const handleSubmit= (event) => {
      event.preventDefault()
      if (nombre.length>3 && apellido.length>6) {
          setShow(true)
          setError(false)
      } else {
          setError(true)
      }
  }

  return (
    <>
      <Form handleSubmit={handleSubmit}
      setNombre={setNombre} setApellido={setApellido} setEmail={setEmail} setFecha={setFecha} setEstilo={setEstilo} setTatuaje={setTatuaje}/>
      {show && <Card nombre={nombre} email={email} estilo={estilo}/>}
      {error && <div><h3 style={{color: 'red'}}>Por favor chequea que la informacion sea correcta</h3></div>}
    </>
  )
}

export default App
