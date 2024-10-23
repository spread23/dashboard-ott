import React, { useRef, useState, useEffect } from 'react'
import './general.css'

import { FaSearch } from 'react-icons/fa'
import logo from '../../assets/logo_solo.svg'
import { FaHeart } from 'react-icons/fa'

export const General = ({ token }) => {

    const [listUsers, setListUsers] = useState([])
    const [urlCv, setUrlCv] = useState('')
    const [user, setUser] = useState({
        name: '',
        talents: '',
        experience: '',
        availability: ''
    })

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await fetch('https://dashboard-ofrecetutalento.com:3100/api/user/get-users', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': token
            }
        })

        const data = await response.json()

        if (data.status == 'success') {
            setListUsers(data.users)
        }

    }

    const getUser = async (id) => {
        const response = await fetch(`https://dashboard-ofrecetutalento.com:3100/api/user/get-user/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': token
            }
        })

        const data = await response.json()

        if (data.status == 'success') {
            setUser(data.user)
            setUrlCv(`https://dashboard-ofrecetutalento.com:3100/api/user/get-pdf/${data.user.cv}`)
        }

    }

    const showCv = async () => {
        try {
            const response = await fetch(urlCv, {
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            });

            if (response.ok) {
                const blob = await response.blob()
                const url = window.URL.createObjectURL(blob)
                window.open(url, '_blank')
            } else {
                throw new Error('Error al obtener el PDF');
            }
        } catch (error) {
            console.error('Error al abrir el PDF:', error);
        }
    }

    const dialogRef = useRef(null)

    const showPopup = (id) => {
        getUser(id)
        dialogRef.current.showModal()
        document.body.classList.add('blur');
    }

    const closePopup = () => {
        dialogRef.current.close()
        document.body.classList.remove('blur');
    }

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
            <div className='filter-ott-container'>
                    <div className='filter-ott'>
                        <button className='btn-filter'>Filtro OTT</button>
                    </div>
                </div>
            <div className='candidate-container'>
                <h1>Candidatos:</h1>
                {listUsers && listUsers.length >= 1 ?
                    listUsers.map((user) => {
                        return <div key={user._id} className='cards-candidate-container'><div onClick={() => showPopup(user._id)} className='card-candidate'>
                            <h3>Nombre candidato:</h3>
                            <h4>{user.name}</h4>
                            <div className='description-candidate'>
                                <h3>Talentos:</h3>
                                <h4>{user.talents}</h4>
                                <h4 className='description-candidate-card'>Experiencia:</h4>
                                <h4>{user.experience}</h4>
                            </div>
                        </div></div>

                    }) :

                    <div>
                        <h2>Aun no hay postulantes para mostrar</h2>
                    </div>
                }
            </div>

            <dialog ref={dialogRef}>
                <div onClick={closePopup} className='close'>X</div>
                <div className='main-popup'>
                    <div className='title-profile'>
                        <img className='logo-popup' src={logo} alt="logo" />
                        <h3>Perfil {user.name}</h3>
                        <button className='btn-fav'><FaHeart className='icon-fav'></FaHeart>Añadir a favoritos</button>
                    </div>
                    <div className='description-popup'>
                        <div className='talents-popup'>
                            <h4 className='title-description-popup'>Talentos: </h4>
                            <h6>{user.talents}</h6>
                        </div>

                        <div className='talents-popup'>
                            <h4 className='title-description-popup'>Años de experiencia: </h4>
                            <h6>{user.experience}</h6>
                        </div>

                        <div className='talents-popup'>
                            <h4 className='title-description-popup'>Disponibilidad: </h4>
                            <h6>{user.availability}</h6>
                        </div>
                    </div>
                    <button onClick={showCv} className='btn-login'>Ver CV</button>
                    <button className='btn-login'>Ver video</button>
                    <button className='btn-login'>Agendar entrevista</button>
                </div>
            </dialog>
        </div>
    )
}