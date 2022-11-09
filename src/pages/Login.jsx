import React from 'react'
import { NavBar } from './../ui/NavBar'
import { useState } from 'react';

// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Login = () => {
  const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
}

  const [state, setState] = useState({
    email: '',
    password: '',
})

// Se desestructuran los valores del state para vincularlos al value de los input
  const { email, password } = state;

// Se capturan los datos ingresados en los inputs 
  const handleInputChange = ({ target }) => {
    setState({
        ...state,
        [target.name]: target.value
    })
};

// Se envían al back-end los datos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
        // Se modifican las opciones del fetch, añadiendo los datos del formulario
        options.body = JSON.stringify({ email, password })

        const resp = await fetch ('http://localhost:4000/loginUser', options)

        // Si el ok es false, significa que se produjo un error en la petición
        if (!resp.ok) alert('Revise las credenciales y vuelva a intentarlo');

        const data = await resp.json()
        console.log(data);

    })()
};


  return (
    <div className='row'>
      <NavBar/>
      <center>
        <h1>Iniciar Sesión</h1>
        <form
                    onSubmit={handleSubmit}
                    className='border p-4 rounded bg-white'
                >
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='text'
                        name='email'
                        autoComplete='off'
                        className='form-control mb-3'
                        onChange={handleInputChange}
                        value={email}
                        autoFocus={true}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type='password'
                        name='password'
                        autoComplete='off'
                        className='form-control'
                        onChange={handleInputChange}
                        value={password}
                    />

                    <button
                        type='submit'
                        className='btn btn-sm btn-primary mt-4'
                    >
                        Ingresar
                    </button>
                </form>
      </center>
    </div>
    
  )
}