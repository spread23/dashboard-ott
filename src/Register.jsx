import React from 'react'

import './login.css'
import logo from './assets/logo_full_solo_blanco.svg'

export const Register = () => {

    return (
        <>
            <div className='login-container'>
                <div className='form-login-container'>
                    <img className='logo-full' src={logo} alt="logo-complete" />
                    <div className='form-container-login'>
                        <form className='form-log'>
                            <div className='form-group'>
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="name" placeholder='Ingresa tu nombre' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="lastname">Apellido</label>
                                <input type="text" name="lastname" placeholder='Ingresa tu apellido' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="username">Usuario</label>
                                <input type="text" name="username" placeholder='Ingresa tu usuario' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder='Ingresa tu email' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" name="password" placeholder='Ingresa tu contraseña' />
                            </div>

                            <button className='btn-login'>Login</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}