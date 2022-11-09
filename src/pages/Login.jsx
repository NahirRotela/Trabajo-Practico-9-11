import React from 'react'
import { NavBar } from './../ui/NavBar'
// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Login = () => {
  return (
    <div className='row'>
      <NavBar/>
      <center>
        <h1>Iniciar Sesión</h1>
      </center>
    </div>
  )
}