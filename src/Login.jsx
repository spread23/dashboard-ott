import React, { useState } from 'react'

import './login.css'
import logo from './assets/logo_full_solo_blanco.svg'

export const Login = ( { setLoged, setUser, setToken } ) => {

    const [form, setForm] = useState({})

    const getFetch = async (url, body) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        if (data.status == 'success') {
            setLoged('loged')
            setToken(data.token)
            setUser(data.recruiter)
        } else {
            alert(data.message)
        }
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getFetch('https://dashboard-ofrecetutalento.com:3100/api/recruiter/login', form)
    }

    return (
        <>
            <div className='login-container'>
                <div className='form-login-container'>
                    <img className='logo-full' src={logo} alt="logo-complete" />
                    <div className='form-container-login'>
                        <form onSubmit={handleSubmit} className='form-log'>
                            <div className='form-group'>
                                <label htmlFor="email">Email</label>
                                <input required onChange={handleOnChange} type="email" name="email" placeholder='Ingresa tu email' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="password">Contraseña</label>
                                <input required onChange={handleOnChange} type="password" name="password" placeholder='Ingresa tu contraseña' />
                            </div>

                            <button type='submit' className='btn-login'>Login</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}