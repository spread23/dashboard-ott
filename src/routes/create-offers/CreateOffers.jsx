import React, { useState } from 'react'
import './createOffers.css'

export const CreateOffers = ({ user, token }) => {

    const initialForm = {
        title: '',
        description: '',
        area: '',
        experience: '',
        availability: 'Remoto',
        salary: '200-500',
        languajes: '',
        country: '',
        city: '',
        region: ''
    }

    const [form, setForm] = useState({})

    const getFetch = async (url, body) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(body)
        })
        const data = await response.json()
        if (data.status == 'success') {
            alert('Has creado la vacante de manera satisfactoria')
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
        getFetch(`https://dashboard-ofrecetutalento.com:3100/api/offer/create-offer/${user._id}`, form)
    }

    return (
        <div className='create-offer-container'>
            <h1>Crea una nueva vacante</h1>
            <div className='form-create-container'>
                <form onSubmit={handleSubmit} className='form-create'>
                    <div className='form-group'>
                        <label htmlFor="title">Nombre vacante</label>
                        <input required value={form.title} onChange={handleOnChange} type="text" name="title" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="description">Description vacante</label>
                        <textarea required value={form.description} onChange={handleOnChange} name="description" placeholder='descripcion...'></textarea>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="area">Area de la vacante</label>
                        <input required value={form.area} onChange={handleOnChange} type="text" name="area" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="experience">Experiencia requerida</label>
                        <input required value={form.experience} onChange={handleOnChange} type="text" name="experience" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="country">País</label>
                        <input required value={form.country} onChange={handleOnChange} type="text" name="country" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="city">Distrito</label>
                        <input required value={form.city} onChange={handleOnChange} type="text" name="city" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="region">Corregimiento</label>
                        <input required value={form.region} onChange={handleOnChange} type="text" name="region" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="availability">Disponibilidad requerida</label>

                        <select required value={form.availability} className='input-select' name="availability" onChange={handleOnChange}>
                            <option value="">--Selecciona una disponibilidad--</option>
                            <option value="remoto">Remoto</option>
                            <option value="presencial">Presencial</option>
                            <option value="hibrido">Hibrido</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="availability">Salario en dolares</label>

                        <select required value={form.salary} className='input-select' name="salary" onChange={handleOnChange}>
                            <option value="">--Selecciona un salario--</option>
                            <option value="200-500">$200-$500</option>
                            <option value="600-1000">$600-$1000</option>
                            <option value="1100-1500">$1100-$1500</option>
                            <option value="1600-2000">$1600-$2000</option>
                            <option value="2000-3000">$2000-$3000</option>
                            <option value="3500">Más de $3500</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <fieldset className='fieldset'>
                            <legend>Idiomas requeridos:</legend>

                            <label htmlFor="languajes">Idiomas:</label>
                            <input required value={form.languajes} onChange={handleOnChange} type="text" name="languajes" />
                        </fieldset>
                    </div>
                    <button type='submit' className='btn-update'>Crear vacante</button>
                </form>
            </div>
        </div>
    )
}