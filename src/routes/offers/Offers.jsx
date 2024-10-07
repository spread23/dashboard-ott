import React, { useRef, useState, useEffect } from 'react'
import './offers.css'

import { FaCity } from 'react-icons/fa'
import logo from '../../assets/logo_solo.svg'

export const Offers = ({ user, token }) => {

    const [listOffers, setListOffers] = useState([])
    const [offer, setOffer] = useState({
        title: '',
        description: '',
        area: '',
        availability: ''
    })

    useEffect(() => {
        getOffers()
    }, [])

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

    const getOffer = async (id) => {
        const response = await fetch(`https://dashboard-ofrecetutalento.com:3100/api/offer/get-offer/${user._id}/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': token
            }
        })

        const data = await response.json()

        if (data.status == 'success') {
            setOffer(data.offer)
            console.log(data)
        }

    }

    const dialogRef = useRef(null)

    const showPopup = (id) => {
        getOffer(id)
        dialogRef.current.showModal()
        document.body.classList.add('blur');
    }

    const closePopup = () => {
        dialogRef.current.close()
        document.body.classList.remove('blur');
    }

    return (
        <div className='offers-container'>
            <h1>Vacantes</h1>
            <div className='offers-container'>
                <h1>Candidatos:</h1>
                {listOffers && listOffers.length >= 1 ?
                    listOffers.map((offer) => {
                        return <div key={offer._id} className='cards-offers-container'><div onClick={() => showPopup(offer._id)} className='card-candidate'>
                            <FaCity className='icon-offer'></FaCity>
                            <h3>Nombre vacante: {offer.title}</h3>
                            <div className='description-offer'>
                                <h3>Descripcion vacante: {offer.vacante}</h3>
                                <h4 className='description-offer-card'>Area vacante: {offer.area}</h4>
                            </div>
                        </div></div>

                    }) :

                    <div>
                        <h2>Aun no has creado vacantes</h2>
                    </div>
                }
            </div>

            <dialog ref={dialogRef}>
                <div onClick={closePopup} className='close'>X</div>
                <div className='main-popup'>
                    <div className='title-profile'>
                        <img className='logo-popup' src={logo} alt="logo" />
                        <h3>Vacante: {offer.title}</h3>
                    </div>
                    <div className='description-popup'>
                        <div className='talents-popup'>
                            <h4 className='title-description-popup'>Nombre vacante: </h4>
                            <h6>{offer.title}</h6>
                        </div>

                        <div className='talents-popup'>
                            <h4 className='title-description-popup'>Descripcion de la vacantes</h4>
                            <h6>{offer.description}</h6>
                        </div>

                        <div className='talents-popup'>
                            <h4 className='title-description-popup'>Usuarios postulados</h4>
                            <h6>Listado de usuarios</h6>
                            <h6>Aun no se ha postulado ningun usuario a tu vacante</h6>
                        </div>
                    </div>
                    <button className='btn-login'>Eliminar vacante</button>
                    <button className='btn-login'>Editar vacante</button>
                </div>
            </dialog>
        </div>
    )
}