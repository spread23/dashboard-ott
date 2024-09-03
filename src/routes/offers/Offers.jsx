import React from 'react'
import './offers.css'

import { FaCity } from 'react-icons/fa'

export const Offers = () => {
    return (
        <div className='offers-container'>
            <h1>Vacantes</h1>
            <div className='cards-offers-container'>
                <div className='card-offers'>
                    <FaCity className='icon-offer'></FaCity>
                    <h3>Nombre empresa</h3>
                    <div className='description-offer'>
                        <h3>Descripcion empresa</h3>
                        <h4 className='description-offer-card'>Descripcion vacante</h4>
                    </div>
                </div>

                <div className='card-offers'>
                    <FaCity className='icon-offer'></FaCity>
                    <h3>Nombre empresa</h3>
                    <div className='description-offer'>
                        <h3>Descripcion empresa</h3>
                        <h4 className='description-offer-card'>Descripcion vacante</h4>
                    </div>
                </div>

                <div className='card-offers'>
                    <FaCity className='icon-offer'></FaCity>
                    <h3>Nombre empresa</h3>
                    <div className='description-offer'>
                        <h3>Descripcion empresa</h3>
                        <h4 className='description-offer-card'>Descripcion vacante</h4>
                    </div>
                </div>

                <div className='card-offers'>
                    <FaCity className='icon-offer'></FaCity>
                    <h3>Nombre empresa</h3>
                    <div className='description-offer'>
                        <h3>Descripcion empresa</h3>
                        <h4 className='description-offer-card'>Descripcion vacante</h4>
                    </div>
                </div>

                <div className='card-offers'>
                    <FaCity className='icon-offer'></FaCity>
                    <h3>Nombre empresa</h3>
                    <div className='description-offer'>
                        <h3>Descripcion empresa</h3>
                        <h4 className='description-offer-card'>Descripcion vacante</h4>
                    </div>
                </div>

                <div className='card-offers'>
                    <FaCity className='icon-offer'></FaCity>
                    <h3>Nombre empresa</h3>
                    <div className='description-offer'>
                        <h3>Descripcion empresa</h3>
                        <h4 className='description-offer-card'>Descripcion vacante</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}