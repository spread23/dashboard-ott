import React, { useRef, useState, useEffect } from 'react'
import './general.css'

import { FaSearch } from 'react-icons/fa'
import logo from '../../assets/logo_solo.svg'
import { FaHeart } from 'react-icons/fa'

export const General = ({ user, token }) => {

    const [listUsers, setListUsers] = useState([])
    const [urlCv, setUrlCv] = useState('')
    const [userData, setUser] = useState({
        name: '',
        talents: '',
        experience: '',
        availability: ''
    })

    const [listOffers, setListOffers] = useState([])
    const [filter, setFilter] = useState(false)
    const [experience, setExperience] = useState('0')
    const [talents, setTalents] = useState('')
    const [languajes, setLanguajes] = useState('')
    const [country, setCountry] = useState('')

    useEffect(() => {
        getUsers()
        getOffers()
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

    const getOffers = async () => {
        const response = await fetch(`https://dashboard-ofrecetutalento.com:3100/api/offer/get-offers/${user._id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': token
            }
        })

        const data = await response.json()

        if (data.status == 'success') {
            setListOffers(data.offers)
            console.log(data)
        } else {
            console.log(data)
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

    const addFilter = async (id) => {

        const response = await fetch(`https://dashboard-ofrecetutalento.com:3100/api/offer/get-offer/${user._id}/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': token
            }
        })

        const data = await response.json()

        if (data.status == 'success') {
            // Convertir experiencia a número
            const experienciaNum = parseInt(data.offer.experience);

            // Convertir talentos e idiomas a arreglos
            const talentosArray = data.offer.area.split(',').map(talento => talento.trim().toLowerCase());
            const idiomasArray = data.offer.languajes.split(',').map(idioma => idioma.trim().toLowerCase());

            setFilter(true)
            setExperience(experienciaNum)
            setLanguajes(idiomasArray)
            setTalents(talentosArray)
            setCountry(data.offer.country)
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
    const dialogRefTwo = useRef(null)

    const showPopup = (id) => {
        getUser(id)
        dialogRef.current.showModal()
        document.body.classList.add('blur');
    }

    const closePopup = () => {
        dialogRef.current.close()
        document.body.classList.remove('blur');
    }

    const showPopupTwo = () => {
        dialogRefTwo.current.showModal()
        document.body.classList.add('blur');
        getOffers()
    }

    const closePopupTwo = () => {
        dialogRefTwo.current.close()
        document.body.classList.remove('blur');
    }

    const setAllFilters = () => {
        setFilter(false)
        alert('Has deshecho los filtros')
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
                    <button onClick={() => showPopupTwo()} className='btn-filter'>Pre-Filtro OTT</button>
                    <button onClick={() => setAllFilters()} className='btn-filter'>Quitar filtros</button>
                </div>
            </div>
            <div className='candidate-container'>
                <h1>Candidatos:</h1>
                {!filter ?

                    <>
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
                                </div>
                                </div>

                            }) :

                            <div>
                                <h2>Aun no hay postulantes para mostrar</h2>
                            </div>
                        }
                    </>

                    :

                    <>
                        {listUsers.filter((user) => {

                            // Convertir experiencia a número
                            const experienciaUserNum = parseInt(user.experience);

                            // Convertir talentos e idiomas a arreglos
                            const talentosUserArray = user.talents.split(',').map(talento => talento.trim().toLowerCase());
                            const idiomasUserArray = user.languaje.split(',').map(idioma => idioma.trim().toLowerCase());

                            return experienciaUserNum >= experience &&
                                talentosUserArray.some(talento => talents.includes(talento)) &&
                                idiomasUserArray.some(idioma => languajes.includes(idioma)) &&
                                user.country.toLowerCase() === country.toLowerCase()
                        }).map((user) => {
                            return <div key={user._id} className='cards-candidate-container'><div onClick={() => showPopup(user._id)} className='card-candidate'>
                                <h3>Nombre candidato:</h3>
                                <h4>{user.name}</h4>
                                <div className='description-candidate'>
                                    <h3>Talentos:</h3>
                                    <h4>{user.talents}</h4>
                                    <h4 className='description-candidate-card'>Experiencia:</h4>
                                    <h4>{user.experience}</h4>
                                </div>
                            </div>
                            </div>
                        })}
                    </>}
            </div>

            <dialog ref={dialogRef}>
                <div onClick={closePopup} className='close'>X</div>
                <div className='main-popup'>
                    <div className='title-profile'>
                        <img className='logo-popup' src={logo} alt="logo" />
                        <h3>Perfil {userData.name}</h3>
                        <button className='btn-fav'><FaHeart className='icon-fav'></FaHeart>Añadir a favoritos</button>
                    </div>
                    <div className='description-popup'>
                        <div className='talents-popup'>
                            <h4 className='title-description-popup'>Talentos: </h4>
                            <h6>{userData.talents}</h6>
                        </div>

                        <div className='talents-popup'>
                            <h4 className='title-description-popup'>Años de experiencia: </h4>
                            <h6>{userData.experience}</h6>
                        </div>

                        <div className='talents-popup'>
                            <h4 className='title-description-popup'>Disponibilidad: </h4>
                            <h6>{userData.availability}</h6>
                        </div>
                    </div>
                    <button onClick={showCv} className='btn-login'>Ver CV</button>
                    <button className='btn-login'>Ver video</button>
                    <button className='btn-login'>Agendar entrevista</button>
                </div>
            </dialog>

            <dialog ref={dialogRefTwo}>
                <div onClick={closePopupTwo} className='close'>X</div>
                <div className='main-popup'>
                    <div className='title-offers-general'>
                        <h2 className='title-general-offer'>Con que oferta quieres aplicar el filtro:</h2>
                        {listOffers && listOffers.length >= 1 ?

                            <div className='offers-container-general'>
                                {listOffers.map((offer) => {
                                    return <div key={offer._id}>

                                        <button onClick={() => { addFilter(offer._id) }} className='btn-offer-general'>{offer.title}</button>

                                    </div>
                                })}
                            </div>

                            :

                            <div className='title-general-offer'>
                                <h2>No has creado ofertas aún!!</h2>
                            </div>}
                    </div>
                </div>
            </dialog>
        </div>
    )
}