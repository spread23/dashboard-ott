import React from 'react'
import './general.css'

import { FaSearch } from 'react-icons/fa'

export const General = () => {
    return (
        <div className='container-general'>
            <div className='title-general'>
                <h2>Dashboard</h2>
                <div className='search-container'>
                    <div className='icon-search'><FaSearch></FaSearch></div>
                    <input className='search' type="text" placeholder='buscar' />
                </div>
            </div>
            <div className='filter-general'>
                <h3>Puedes filtrar por</h3>
                <div className='select-container'>
                    <h3 className='title-select'>Experiencia</h3>
                    <select className='input-select' name="experience">
                        <option value="menos de 1 año">Menos de 1 año</option>
                        <option value="de 1 a 3 años">De 1 a 3 años</option>
                        <option value="de 3 a 5 años">De 3 a 5 años</option>
                        <option value="de 5 a 8 años">De 5 a 8 años</option>
                        <option value="más de 10 años">Más de 10 años</option>
                    </select>
                </div>

                <div className='select-container'>
                    <h3 className='title-select'>Disponibilidad</h3>
                    <select className='input-select' name="availability">
                        <option value="remoto">Remoto</option>
                        <option value="presencial">Presencial</option>
                        <option value="hibrido">Hibrido</option>
                    </select>
                </div>

                <div className='select-container'>
                    <fieldset>
                        <legend>Usuarios con video:</legend>

                        <div>
                            <input name='radio' type="radio" value="si"/>
                            <label htmlFor="si">SI</label>
                        </div>

                        <div>
                            <input name="radio" type="radio" value="no" />
                            <label htmlFor="no">NO</label>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className='data-users-container'>
                <div className='title-container-data'>
                    <h3 className='title-data'>Nombre</h3>
                    <h3 className='title-data'>Talentos</h3>
                    <h3 className='title-data'>Experiencia</h3>
                    <h3 className='title-data'>Disponibilidad</h3>
                </div>
                <section className='data-container'>
                    <article className='data-user'>
                        <h4 className='cell'>Esteban Rojas</h4>
                        <h4 className='cell'>5</h4>
                        <h4 className='cell'>4</h4>
                        <h4 className='cell'>Presencial-remoto</h4>
                    </article>

                    <article className='data-user'>
                        <h4 className='cell'>Samir Castro</h4>
                        <h4 className='cell'>4</h4>
                        <h4 className='cell'>10</h4>
                        <h4 className='cell'>remoto</h4>
                    </article>

                    <article className='data-user'>
                        <h4 className='cell'>Alejandro Porras</h4>
                        <h4 className='cell'>3</h4>
                        <h4 className='cell'>8</h4>
                        <h4 className='cell'>Presencial</h4>
                    </article>

                    <article className='data-user'>
                        <h4 className='cell'>Juan Eskildsen</h4>
                        <h4 className='cell'>5</h4>
                        <h4 className='cell'>15</h4>
                        <h4 className='cell'>Presencial</h4>
                    </article>
                </section>
            </div>
        </div>
    )
}