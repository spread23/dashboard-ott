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
                    <h3 className='title-select'>Usuarios que hablan otro idioma</h3>
                    <select className='input-select' name="availability">
                        <option value="ingles">Ingles</option>
                        <option value="frances">Frances</option>
                        <option value="portugues">Portugues</option>
                    </select>
                </div>

                <div className='select-container'>
                    <h3 className='title-select'>Usuarios que viven en:</h3>
                    <select className='input-select' name="country">
                        <option value="Panamá">Panamá</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Chile">Chile</option>
                    </select>
                </div>

                <div className='select-container'>
                    <fieldset>
                        <legend>Usuarios con video:</legend>

                        <div>
                            <input name='radio' type="radio" value="si" />
                            <label htmlFor="si">SI</label>
                        </div>

                        <div>
                            <input name="radio" type="radio" value="no" />
                            <label htmlFor="no">NO</label>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className='candidate-container'>
                <h1>Candidatos:</h1>
                <div className='cards-candidate-container'>
                    <div className='card-candidate'>
                        <h3>Nombre candidato:</h3>
                        <h4>Esteban Rojas</h4>
                        <div className='description-candidate'>
                            <h3>Talentos:</h3>
                            <h4>5</h4>
                            <h4 className='description-candidate-card'>Experiencia:</h4>
                            <h4>4 años</h4>
                        </div>
                    </div>

                    <div className='card-candidate'>
                        <h3>Nombre candidato:</h3>
                        <h4>Esteban Rojas</h4>
                        <div className='description-candidate'>
                            <h3>Talentos:</h3>
                            <h4>5</h4>
                            <h4 className='description-candidate-card'>Experiencia:</h4>
                            <h4>4 años</h4>
                        </div>
                    </div>

                    <div className='card-candidate'>
                        <h3>Nombre candidato:</h3>
                        <h4>Esteban Rojas</h4>
                        <div className='description-candidate'>
                            <h3>Talentos:</h3>
                            <h4>5</h4>
                            <h4 className='description-candidate-card'>Experiencia:</h4>
                            <h4>4 años</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}