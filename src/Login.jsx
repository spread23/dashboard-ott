import React from 'react'

import './login.css'
import logo from './assets/logo_full_solo_blanco.svg'

export const Login = ( { setLoged } ) => {
    const handleOnCLick = (event) => {
        event.preventDefault()

        setLoged('loged')
    }

    return (
        <div className='login-container'>
            <div className='form-login-container'>
                <img className='logo-full' src={logo} alt="logo-complete" />
                <div className='form-container-login'>
                    <form className='form-log'>
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder='Ingresa tu email' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" placeholder='Ingresa tu contraseña' />
                        </div>

                        <button onClick={handleOnCLick} className='btn-login'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}