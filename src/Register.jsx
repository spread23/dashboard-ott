import React, { useState } from 'react'

import './login.css'
import logo from './assets/logo_full_solo_blanco.svg'

export const Register = () => {

    const initialForm = {
        name: '',
        lastname: '',
        user: '',
        email: '',
        password: ''
    }

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
            alert('Te has registrado de manera satisfactoria')
            setForm(initialForm)
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
        getFetch('https://dashboard-ofrecetutalento.com:3100/api/recruiter/register', form)
    }

    return (
        <>
            <div className='login-container'>
                <div className='form-login-container'>
                    <img className='logo-full' src={logo} alt="logo-complete" />
                    <div className='form-container-login'>
                        <form onSubmit={handleSubmit} className='form-log'>
                            <div className='form-group'>
                                <label htmlFor="name">Nombre</label>
                                <input value={form.name} required onChange={handleOnChange} type="text" name="name" placeholder='Ingresa tu nombre' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="lastname">Apellido</label>
                                <input value={form.lastname} required onChange={handleOnChange} type="text" name="lastname" placeholder='Ingresa tu apellido' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="user">Usuario</label>
                                <input value={form.user} required onChange={handleOnChange} type="text" name="user" placeholder='Ingresa tu usuario' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="email">Email</label>
                                <input value={form.email} required onChange={handleOnChange} type="email" name="email" placeholder='Ingresa tu email' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="password">Contraseña</label>
                                <input value={form.password} required onChange={handleOnChange} type="password" name="password" placeholder='Ingresa tu contraseña' />
                            </div>

                            <button type='submit' className='btn-login'>Regístrate</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}