import React, { useRef } from 'react'
import './offers.css'

import { FaCity } from 'react-icons/fa'
import logo from '../../assets/logo_solo.svg'

export const Offers = () => {

    const dialogRef = useRef(null)

    const showPopup = () => {
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
            <div className='cards-offers-container'>
                <div onClick={() => showPopup()} className='card-offers'>
                    <FaCity className='icon-offer'></FaCity>
                    <h3>Nombre empresa</h3>
                    <div className='description-offer'>
                        <h3>Descripcion empresa</h3>
                        <h4 className='description-offer-card'>Descripcion vacante</h4>
                    </div>
                </div>

                <div onClick={() => showPopup()} className='card-offers'>
                    <FaCity className='icon-offer'></FaCity>
                    <h3>Nombre empresa</h3>
                    <div className='description-offer'>
                        <h3>Descripcion empresa</h3>
                        <h4 className='description-offer-card'>Descripcion vacante</h4>
                    </div>
                </div>

                <div onClick={() => showPopup()} className='card-offers'>
                    <FaCity className='icon-offer'></FaCity>
                    <h3>Nombre empresa</h3>
                    <div className='description-offer'>
                        <h3>Descripcion empresa</h3>
                        <h4 className='description-offer-card'>Descripcion vacante</h4>
                    </div>
                </div>

                <div onClick={() => showPopup()} className='card-offers'>
                    <FaCity className='icon-offer'></FaCity>
                    <h3>Nombre empresa</h3>
                    <div className='description-offer'>
                        <h3>Descripcion empresa</h3>
                        <h4 className='description-offer-card'>Descripcion vacante</h4>
                    </div>
                </div>

                <div onClick={() => showPopup()} className='card-offers'>
                    <FaCity className='icon-offer'></FaCity>
                    <h3>Nombre empresa</h3>
                    <div className='description-offer'>
                        <h3>Descripcion empresa</h3>
                        <h4 className='description-offer-card'>Descripcion vacante</h4>
                    </div>
                </div>

                <div onClick={() => showPopup()} className='card-offers'>
                    <FaCity className='icon-offer'></FaCity>
                    <h3>Nombre empresa</h3>
                    <div className='description-offer'>
                        <h3>Descripcion empresa</h3>
                        <h4 className='description-offer-card'>Descripcion vacante</h4>
                    </div>
                </div>
            </div>

            <dialog ref={dialogRef}>
                <div onClick={closePopup} className='close'>X</div>
                <div className='main-popup'>
                    <div className='title-profile'>
                        <img className='logo-popup' src={logo} alt="logo" />
                        <h3>Perfil Esteban Rojas</h3>
                    </div>
                    <div className='description-popup'>
                        <div className='talents-popup'>
                            <h4 className='title-description-popup'>Nombre empresa: </h4>
                            <h6>Bancolombia</h6>
                        </div>

                        <div className='talents-popup'>
                            <h4 className='title-description-popup'>Descripcion de la empresa</h4>
                            <h6>Bancolombia es una empresa con mas de 30 años de recorrido</h6>
                        </div>

                        <div className='talents-popup'>
                            <h4 className='title-description-popup'>Usuarios postulados</h4>
                            <h6>Listado de usuarios</h6>
                        </div>
                    </div>
                    <button className='btn-login'>Eliminar oferta</button>
                    <button className='btn-login'>Editar oferta</button>
                </div>
            </dialog>
        </div>
    )
}