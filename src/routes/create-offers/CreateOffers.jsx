import React from 'react'
import './createOffers.css'

export const CreateOffers = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className='create-offer-container'>
            <h1>Crea una nueva vacante</h1>
            <div className='form-create-container'>
                <form className='form-create'>
                    <div className='form-group'>
                        <label htmlFor="name">Nombre vacante</label>
                        <input type="text" name="name" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="description">Description vacante</label>
                        <textarea name="description" placeholder='descripcion...'></textarea>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="area">Area de la vacante</label>
                        <input type="text" name="area" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="experience">Experiencia requerida</label>
                        <input type="text" name="experience" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="country">País</label>
                        <input type="text" name="country" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="city">Distrito</label>
                        <input type="text" name="city" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="region">Corregimiento</label>
                        <input type="text" name="region" />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="availability">Disponibilidad requerida</label>

                        <select className='input-select' name="availability">
                            <option value="remoto">Remoto</option>
                            <option value="presencial">Presencial</option>
                            <option value="hibrido">Hibrido</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="availability">Salario en dolares</label>

                        <select className='input-select' name="salary">
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

                            <div>
                                <input name='english' type="checkbox" value="english" />
                                <label htmlFor="english">Ingles</label>
                            </div>

                            <div>
                                <input name="spanish" type="checkbox" value="spanish" />
                                <label htmlFor="spanish">Español</label>
                            </div>

                            <div>
                                <input name="french" type="checkbox" value="french" />
                                <label htmlFor="french">Frances</label>
                            </div>

                            <div>
                                <input name="portugese" type="checkbox" value="portugese" />
                                <label htmlFor="portugese">Portugues</label>
                            </div>
                        </fieldset>
                    </div>
                    <button onClick={handleSubmit} className='btn-update'>Crear vacante</button>
                </form>
            </div>
        </div>
    )
}